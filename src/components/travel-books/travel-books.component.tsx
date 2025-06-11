/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import React, { useEffect, useState } from "react";

import categoryKeywords from "../../constants/categoryKeywords";

import {
  BookItem,
  BooksList,
  BooksWrapper,
  Category,
  CategoryName,
  Title,
} from "./travel-books.style";

export interface Book {
  category: string;
  id: string;
  title: string;
  author: string;
  img: string;
  link: string;
}

const TravelBooks: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);

  const GOOGLE_KEY =
    process.env.REACT_APP_GOOGLE_BOOKS_API_KEY ??
    "AIzaSyDsRWxTVNh7SwaP2x7J83e0qRpHkDc1VJU";

  console.log("GOOGLE_KEY", GOOGLE_KEY);

  useEffect(() => {
    if (!GOOGLE_KEY) {
      throw new Error("Missing Google Books API key in environment variables");
    }
    const mapToCustomCategory = (volumeInfo: any): string => {
      const title = volumeInfo.title ?? "";
      const authors = Array.isArray(volumeInfo.authors)
        ? volumeInfo.authors.join(" ")
        : "";
      const description = volumeInfo.description ?? "";

      const content = `${title} ${authors} ${description}`.toLowerCase();

      for (const [category, keywords] of Object.entries(categoryKeywords)) {
        if (keywords.some((keyword) => content.includes(keyword))) {
          return category;
        }
      }

      return "Other";
    };
    const fetchBooks = async (): Promise<void> => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=travel&key=${GOOGLE_KEY}&maxResults=40`,
        );
        const data = await res.json();

        const fetchedBooks: Book[] = data.items.map((item: any) => {
          const info = item.volumeInfo;
          return {
            id: item.id,
            title: info.title,
            author: info.authors?.join(", ") || "unkown Author",
            img: info.imageLinks?.thumbnail || "",
            link: info.infoLink,
            category: mapToCustomCategory(info),
          };
        });

        setBooks(fetchedBooks);
      } catch (err) {
        setError("failed to fetch books");
        console.error(err);
      }
    };

    void fetchBooks();
  }, []);

  if (error !== null) {
    return (
      <BooksWrapper>
        <Title>Recommended Travel Books</Title>
        <div>Error: {error}</div>
      </BooksWrapper>
    );
  }

  const groupedBooks = books.reduce<Record<string, Book[]>>((groups, book) => {
    if (!groups[book.category]) {
      groups[book.category] = [];
    }
    groups[book.category].push(book);
    return groups;
  }, {});

  return (
    <BooksWrapper>
      <Title>Recommended Travel Books</Title>
      {Object.keys(groupedBooks).map((category) => (
        <Category key={category}>
          <CategoryName>{category}</CategoryName>
          <BooksList>
            {groupedBooks[category].map((book) => (
              <BookItem key={book.id}>
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  <img src={book.img} alt={book.title} />
                  <h4>{book.title}</h4>
                  <p>{book.author}</p>
                </a>
              </BookItem>
            ))}
          </BooksList>
        </Category>
      ))}
    </BooksWrapper>
  );
};

export default TravelBooks;

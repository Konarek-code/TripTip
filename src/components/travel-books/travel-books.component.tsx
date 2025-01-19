import React, { useEffect, useState } from "react";
import { fetchBooks } from "../../utils/firebase/firebase.utils";
import {
  BookItem,
  BooksList,
  BooksWrapper,
  Category,
  Title,
} from "./travel-books.style";

export interface Book {
  category: any;
  id: number;
  title: string;
  author: string;
  img: string;
  link: string;
}

const TravelBooks: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = fetchBooks(setBooks, setError);
    return () => {
      unsubscribe();
    };
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
    if (groups[book.category] === undefined) {
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
          <h3 style={{ textAlign: "left", color: "#444" }}>{category}</h3>
          <BooksList>
            {groupedBooks[category].map((book) => (
              <BookItem key={book.id}>
                <img src={book.img} alt={book.title} />
                <h4>{book.title}</h4>
                <p>{book.author}</p>
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  Zobacz więcej
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

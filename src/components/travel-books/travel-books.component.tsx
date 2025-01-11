import { BooksWrapper, Title, BooksList, BookItem } from "./travel-books.style";

// Dane książek (możesz zmienić na dynamiczne API, jeśli chcesz)
const books = [
  {
    title: "Wielka Włóczęga",
    author: "John Doe",
    link: "https://example.com/book1",
  },
  {
    title: "Przygoda na końcu świata",
    author: "Jane Doe",
    link: "https://example.com/book2",
  },
  {
    title: "Podróże marzeń",
    author: "Emily Smith",
    link: "https://example.com/book3",
  },
];

// Komponent TravelBooks
const TravelBooks: React.FC = () => {
  return (
    <BooksWrapper>
      <Title>Polecane książki o podróżach</Title>
      <BooksList>
        {books.map((book, index) => (
          <BookItem key={index}>
            <h4>{book.title}</h4>
            <p>{book.author}</p>
            <a href={book.link} target="_blank" rel="noopener noreferrer">
              Zobacz więcej
            </a>
          </BookItem>
        ))}
      </BooksList>
    </BooksWrapper>
  );
};

export default TravelBooks;

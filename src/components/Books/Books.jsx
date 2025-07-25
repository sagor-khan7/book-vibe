import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="my-10">
      <h2 className="text-4xl font-bold text-center">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;

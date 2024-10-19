import BookCard from "./BookCard";

const BookList = ({ books }) => {
  const bookCards = books.map((book) => (
    <BookCard key={book.bookName} book={book} />
  ));
  return <div className="flex flex-wrap justify-center gap-3">{bookCards}</div>;
};

export default BookList;

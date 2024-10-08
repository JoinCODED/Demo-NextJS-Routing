import BookCard from "./BookCard";

const BookList = ({ books }) => {
  const displayBookList = books.map((book) => (
    <BookCard key={book.bookName} book={book} />
  ));
  return <div className="flex flex-wrap justify-center gap-3">{displayBookList}</div>;
};

export default BookList;

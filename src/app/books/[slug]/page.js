import books from "@/data/books";
import Image from "next/image";
import { redirect } from "next/navigation";

function Book({ params }) {
  const book = books.find(book => book.slug === params.slug)

  if (!book) redirect('/books')

  return (
    <div className="flex gap-3 p-3">
      <div className="w-1/3 flex justify-center">
        <Image
          src={book.image}
          alt={book.bookName}
          width={300}
          height={300}
        />
      </div>
      <div className="w-2/3">
        <h2>{book.bookName}</h2>
        <h6>Release Year: {book.releaseYear}</h6>
        <p>Description:</p>
        <p>{book.description}</p>
      </div>
    </div>
  );
};

export default Book;

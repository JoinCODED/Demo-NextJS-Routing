import Image from "next/image";
import Link from "next/link";
import React from "react";

function BookCard({ book }) {
  return (
    <Link href={`/books/${book.slug}`} className="flex flex-col justify-center items-center w-1/5 rounded-xl p-3 border border-gray-500 border-solid">
      <Image
        src={book.image}
        alt={book.bookName}
        width={300}
        height={300}
      />
      <h5>{book.bookName}</h5>
    </Link>
  );
};

export default BookCard;

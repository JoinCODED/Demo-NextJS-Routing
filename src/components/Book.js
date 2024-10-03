import books from "@/data/books";
import Image from "next/image";

function Book() {
  return (
    <div className="flex gap-3 p-3">
      <div className="w-1/3 flex justify-center">
        <Image
          src={books[0].image}
          alt={books[0].bookName}
          width={300}
          height={300}
        />
      </div>

      <div className="w-2/3">
        <h2>{books[0].bookName}</h2>
        <h6>Release Year: {books[0].releaseYear}</h6>
        <p>Description:</p>
        <p>{books[0].description}</p>
      </div>
    </div>
  );
};

export default Book;

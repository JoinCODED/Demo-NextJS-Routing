import books from "@/data/books"

import BookList from "./BookList"
import Navbar from "./Navbar"

function Books() {
  return (
    <>
      <Navbar />
      <BookList books={books} />
    </>
  )
}

export default Books
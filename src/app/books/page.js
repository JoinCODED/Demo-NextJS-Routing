import BookList from "@/components/BookList"
import Navbar from "@/components/Navbar"
import books from "@/data/books"

function Books() {
  return (
    <>
      <Navbar />
      <BookList books={books} />
    </>
  )
}

export default Books
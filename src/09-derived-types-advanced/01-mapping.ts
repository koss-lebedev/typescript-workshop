/* TESTING */

interface IBook {
  title: string
  author: string
  yearPublished: number
}

const updateBook = (id: number, book: Optional<IBook>) => {
  // call update API...
}

updateBook(1, { yearPublished: 2018 })

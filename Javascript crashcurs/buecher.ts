//buecher verwaltungs-tool

enum Genre {
  Roman = "Roman",
  Sachbuch = "Sachbuch",
  ScienceFiction = "ScienceFiction",
  Biografie = "Biografie",
}

type Book = {
  title: string;
  author: string;
  genre: string;
  release?: number;
  isBorrowed: boolean;
};

type Bookshelf = Book[];

function borrowBook(shelf: Bookshelf, title: string): Bookshelf {
  return shelf.map((book) =>
    book.title === title ? { ...book, isborrowed: true } : book
  );
}

function returnBook(shelf: Bookshelf, title: string): Bookshelf {
  return shelf.map((book) =>
    book.title === title ? { ...book, isborrowed: false } : book
  );
}

function listAvailableBooks(shelf: Bookshelf): Book[] {
  return shelf.filter((book) => !book.isBorrowed);
}

const myShelf: Bookshelf = [
  {
    title: "1984",
    author: "George Orwell",
    genre: Genre.Roman,
    isBorrowed: false,
  },
  {
    title: "Eine kurze Geschichte der Zeit",
    author: "Stephen Hawking",
    genre: Genre.Sachbuch,
    isBorrowed: false,
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    genre: Genre.ScienceFiction,
    isBorrowed: false,
  },
];

const shelfAfterBorrow = borrowBook(myShelf, "Dune");
console.log(listAvailableBooks(shelfAfterBorrow));

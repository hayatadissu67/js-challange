// used them to separate the reult to make it readable
console.log(" ");
console.log("Q6");
//----------------------------------------------
const books = [
  { title: "atomic habits", pages: 320, available: true },
  { title: "clean code", pages: 464, available: false },
  { title: "the alchemist", pages: 208, available: true },
  { title: "deep work", pages: 304, available: false },
];

function availability(available) {
  if (available === true) {
    return "on shelf";
  } else {
    return "borrowed";
  }
}

const formatBook = ({ title, pages, available }) => {
  return `${title.toUpperCase()} (${pages}pages-) ${availability(available)} `;
};

const formatedBook = books.map(formatBook);
for (const books of formatedBook) {
  console.log(books);
}
const availableBooks = books.filter((books) => books.available === true);
console.log(`Available books: ${availableBooks.length}`);

const totalPages = books.reduce(
  (sum, books) => sum + (books.available ? 0 : 1),
  0,
);
let totalPa = totalPages;
console.log(`Total pages in library: ${totalPa}`);

const hasCleanCode = formatedBook.some((books) => books.includes("CLEAN CODE"));
console.log(`Clean Code is in the catalog: ${hasCleanCode}`);

const newBook = [{ title: "1984", pages: 328, available: true }];

const newBookList = [...books, newBook];
console.log(`Catalog size after adding 1984: ${newBookList.length}`);

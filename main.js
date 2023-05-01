/* function setStorage(){
    localStorage.setItem('books_data',JSON.stringify(BOOKS_DATA));
} */
/* function retrieveStorage(){
    BOOKS_DATA=JSON.parse(localStorage.getItem('books_data'));
} */
const BOOKS_DATA = JSON.parse(localStorage.getItem("books_data")) || [];

let form = document.querySelector("form");
let booklist = document.getElementById("book-list");

function updateSelections() {
  form = document.querySelector("form");
  booklist = document.getElementById("book-list");
}

function addBook() {
  const bookTitle = document.getElementById("book-title");
  const bookAuthor = document.getElementById("book-author");
  const bookObj = {};

  let exists = false;

  for (let i = 0; i < BOOKS_DATA.length; i += 1) {
    if (
      BOOKS_DATA[i].title === bookTitle.value &&
      BOOKS_DATA[i].author === bookAuthor.value
    ) {
      exists = true;
    }
  }
  if (!exists) {
    bookObj.title = bookTitle.value;
    bookObj.author = bookAuthor.value;
    return bookObj;
  }
  return null;
}

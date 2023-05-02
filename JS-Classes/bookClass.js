export default class BookClass {
  constructor() {
    this.BOOKS_DATA = JSON.parse(localStorage.getItem("book_data")) || [];
  }
  setStorage() {
    localStorage.setItem("book_data", JSON.stringify(this.BOOKS_DATA));
  }
  list() {
    return this.BOOK_DATA;
  }

  addBooks() {
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
      bookTitle.value='';
      bookAuthor.value='';
    }
   this.setStorage();
  }

  
}

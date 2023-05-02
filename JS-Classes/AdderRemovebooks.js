export default class AdderRemovebooks {
  constructor() {
    this.BOOKS_DATA = JSON.parse(localStorage.getItem('books_data')) || [];
  }

  list() {
    return this.BOOKS_DATA;
  }

  setStorage() {
    localStorage.setItem('books_data', JSON.stringify(this.BOOKS_DATA));
  }

  addBooks() {
    const bookTitle = document.getElementById('book-title');
    const bookAuthor = document.getElementById('book-author');

    const bookObj = {};

    let exists = false;

    for (let i = 0; i < this.BOOKS_DATA.length; i += 1) {
      if (this.BOOKS_DATA[i].title === bookTitle.value
        && this.BOOKS_DATA[i].author === bookAuthor.value) {
        exists = true;
      }
    }

    if (!exists) {
      bookObj.title = bookTitle.value;
      bookObj.author = bookAuthor.value;
      this.BOOKS_DATA.push(bookObj);
      bookTitle.value = '';
      bookAuthor.value = '';
    }

    this.setStorage();
  }

  removeBook(element) {
    const textElements = element.parentElement.querySelectorAll('.book-card-text');

    this.BOOKS_DATA = this.BOOKS_DATA.filter((obj) => {
      if (textElements[0].innerText === obj.title && textElements[1].innerText === obj.author) {
        return false;
      }

      return true;
    });
    this.setStorage();
  }
}

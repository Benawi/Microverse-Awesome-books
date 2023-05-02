export default class ListBooks {
  constructor() {
    this.form = document.querySelector('form');
    this.bookList = document.getElementById('book-list');
  }

  updateSelections() {
    this.form = document.querySelector('form');
    this.bookList = document.getElementById('book-list');
  }

  generateBookCard(bookObj) {
    this.bookCard = document.createElement('li');
    this.bookTitle = document.createElement('p');
    this.bookAuthor = document.createElement('p');
    this.removeBtn = document.createElement('button');

    this.bookCard.classList.add('book-card', 'mb-1');
    this.bookTitle.classList.add('book-card-text');
    this.bookAuthor.classList.add('book-card-text');
    this.removeBtn.classList.add('remove-book', 'mb-05');

    this.bookTitle.textContent = bookObj.title;
    this.bookAuthor.textContent = bookObj.author;
    this.removeBtn.textContent = 'Remove';

    this.bookCard.appendChild(this.bookTitle);
    this.bookCard.appendChild(this.bookAuthor);
    this.bookCard.appendChild(this.removeBtn);
    return this.bookCard;
  }

  clearBooksSection() {
    this.bookList.innerHTML = '';
  }

  displayBooksSection(bookArray) {
    for (let i = 0; i < bookArray.length; i += 1) {
      const bookCard = this.generateBookCard(bookArray[i]);
      this.bookList.appendChild(bookCard);
    }
  }

  generate(bookArray) {
    this.clearBooksSection();
    this.displayBooksSection(bookArray);
    this.updateSelections();
  }
}

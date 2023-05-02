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
    this.sperator = document.createElement('span');

    this.bookCard.classList.add('book-card', 'd-flex', 'align-items-center', 'p-1');
    this.bookTitle.classList.add('book-card-text', 'mb-0');
    this.bookAuthor.classList.add('book-card-text', 'mb-0', 'me-5');
    this.sperator.classList.add('mx-1');
    this.removeBtn.classList.add('remove-book', 'ms-auto', 'bg-white', 'border', 'border-2', 'border-dark', 'px-1');
    const title = `"${bookObj.title}"`;
    this.bookTitle.textContent = title;
    this.bookAuthor.textContent = bookObj.author;
    this.sperator.textContent = 'by';
    this.removeBtn.textContent = 'Remove';

    this.bookCard.appendChild(this.bookTitle);
    this.bookCard.appendChild(this.sperator);
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

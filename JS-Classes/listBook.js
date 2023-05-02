export default class ListBooks {
  constructor() {
    this.form = document.querySelector("form");
    this.bookList = document.getElementById("book-list");
  }

  updateSelections() {
    form = document.querySelector("form");
    booklist = document.getElementById("book-list");
  }

  generateBookCard(bookObj) {
    const bookCard = document.createElement("li");
    const bookTitle = document.createElement("p");
    const bookAuthor = document.createElement("p");
    const removeBtn = document.createElement("button");

    bookCard.classList.add("book-card", "mb-1");
    bookTitle.classList.add("book-card-text");
    bookAuthor.classList.add("book-card-text");
    removeBtn.classList.add("remove-book", "mb-05");
    const { title, author } = bookObj;
    bookTitle.textContent = title;
    bookAuthor.textContent = author;

    removeBtn.textContent = "Remove";

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(removeBtn);
    return bookCard;
  }

  clearBookSection() {
    booklist.innerHTML = '';
  }

  displayBookSection(bookArray) {
    for (let i = 0; i < bookArray.length; i += 1) {
      const bookCard = generateBookCard(bookArray[i]);
      booklist.appendChild(bookCard);
    }
  }
  generate(bookArray) {
    this.clearBooksSection();
    this.displayBooksSection(bookArray);
    this.updateSelections();
  }
}

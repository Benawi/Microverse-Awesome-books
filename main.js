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

function generateBookCard(bookObj)
{
    const bookCard=document.createElement('li');
    const bookTitle=document.createElement('p');
    const bookAuthor=document.createElement('p')
    const removeBtn=document.createElement('button');

    bookCard.classList.add('book-card','mb-1');
    bookTitle.classList.add('book-card-text');
    bookAuthor.classList.add('book-card-text');
    removeBtn.classList.add('remove-book','mb-05')

    const { title, author } = bookObj;
    bookTitle.textContent=title;
    bookAuthor.textContent=author;
    removeBtn.textContent='Remove'

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(removeBtn);
    return bookCard;
}

function clearBookSection(){
    booklist.innerHTML='';
}

function displayBookSection(bookArray){
    for(let i=o; i<bookArray.length; i+=1)
    {
        const bookCard=generateBookCard(bookArray[i]);
        booklist.appendChild(bookCard);
    }
}

displayBookSection(BOOKS_DATA);
updateSelections();


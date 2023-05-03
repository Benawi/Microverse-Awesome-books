import AdderRemovebooks from "./JS-Classes/AdderRemovebooks.js";
import ListBooks from "./JS-Classes/listBook.js";

const adderRemovebooks = new AdderRemovebooks();
const listBooks = new ListBooks();
const form = document.querySelector("form");
listBooks.generate(adderRemovebooks.list());
document.addEventListener("click", (event) => {
  if (event.target && event.target.className.includes("remove-book")) {
    adderRemovebooks.removeBook(event.target);
    listBooks.generate(adderRemovebooks.list());
  }
});

form.addEventListener("submit", (event) => {
  adderRemovebooks.addBooks();
  listBooks.generate(adderRemovebooks.list());
  event.preventDefault();
});

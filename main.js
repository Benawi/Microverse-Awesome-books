import AdderRemovebooks from "./JS-Classes/AdderRemovebooks.js";
import ListBooks from "./JS-Classes/listBook.js";
import Navigation from "./JS-Classes/Navigation.js";

const adderRemovebooks = new AdderRemovebooks();
const listBooks = new ListBooks();
const nav = new Navigation();
//const datetime = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
const datetime = new Date();
const options = {  year: 'numeric', month: 'long',day: 'numeric' };


const dateString = datetime.toLocaleDateString(undefined, options);
const timeString = datetime.toLocaleTimeString();
const dateTimeString = `${dateString} ${timeString}`;

const dateTimeElement = document.getElementById("date-time");
dateTimeElement.innerHTML = dateTimeString;
const form = document.querySelector("form");

listBooks.generate(adderRemovebooks.list(), datetime);
nav.navigation.addEventListener("click", (event) => {
  if (event.target.id === "nav-home") {
    nav.sectionShow(document.getElementById("nav-list"));
  } else if (event.target.nodeName === "A") {
    nav.sectionShow(event.target);
  }
});
document.addEventListener("click", (event) => {
  if (event.target && event.target.className.includes("remove-book")) {
    adderRemovebooks.removeBook(event.target);
    listBooks.generate(adderRemovebooks.list(), datetime);
  }
});

form.addEventListener("submit", (event) => {
  adderRemovebooks.addBooks();
  listBooks.generate(adderRemovebooks.list());
  event.preventDefault();
});

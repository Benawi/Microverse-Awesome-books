import AdderRemovebooks from './JS-Classes/AdderRemovebooks.js'
import ListBooks from './JS-Classes/listBook';

const adderRemovebooks=new AdderRemovebooks();
const listBooks=new ListBooks();
const form=document.querySelector('form');

document.addEventListener('click', (event) => {
  if (event.target && event.target.className === 'remove-book mb-05') {
    adderRemovebooks.removeBook(event.target);
    listBooks.generate(adderRemovebooks.list());
  }
});

form.addEventListener('submit', (event) => {
  adderRemovebooks.addBooks();
  listBooks.generate(adderRemovebooks.list());
  event.preventDefault();
});

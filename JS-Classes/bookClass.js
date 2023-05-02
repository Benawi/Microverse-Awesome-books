export default class BookClass{
    constructor(){
        this.BOOK_DATA=JSON.parse(localStorage.getItem('book_data')) || [];
    }
   

   
}
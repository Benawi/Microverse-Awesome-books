export default class BookClass{
    constructor(){
        this.BOOKS_DATA=JSON.parse(localStorage.getItem('book_data')) || [];
    }
    setStorage(){
        localStorage.setItem('book_data',JSON.stringify(this.BOOKS_DATA));
        
    }
    list(){
        return this.BOOK_DATA;
    }

   
}
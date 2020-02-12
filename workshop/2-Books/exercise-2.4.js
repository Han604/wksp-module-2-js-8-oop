// From 2.3
// Copy over all of the code from 2.3...


// Exercise 2.4
// We need methods in our BookList start reading and finish reading books
//      - startReading accepts a title parameter. (The book should already be in your books array.
//          - set currentlyReading
//          - set the startReadDate in the book object to new Date(Date now());
//      - finishREading accepts a title parameter.
//          - set lastRead to title
//          - update the book's object accordingly.
//          - update the read and unread count accordingly.

// console.log(homeLibrary) when you're done adding, starting and finishing books.
// Make sure that your changes are reflected in the homeLibrary.

class Book {
    constructor(title, genre, author, read, startReadDate, endReadDate) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.startReadDate = startReadDate||'';
        this.endReadDate = endReadDate||'';
    }
}
let book1 = new Book('Catcher in the Rye', 'Drama', 'J.D. Salinger', 'NO');
let book2 = new Book('Metamorphosis', 'Fantasy', 'Franz Kafka', 'Ongoing', 'September 12 2019', );
let book3 = new Book('Slaughter House 5', 'Historical Fiction', 'Kurt Vonnegut', 'yes', 'September 3 2019', 'September 6 2019');
let book4 = new Book('IQ84', 'Fantasy', 'Haruki Murakami', 'yes', 'August 15 2019', 'September 1 2019');
let book5 = new Book('Siddhartha', 'Historical Fiction', 'Herman Hesse', 'yes', 'July 1st 2019', 'July 18 2019');


class BookList {
    constructor(){
        this.booksRead = 0;
        this.booksUnread = 0;
        this.books = [];
        this.lastBook = null;
        this.currentBook = null;
        this.upNext = null;
    }
    startReading = (title) => {
        this.currentBook = title;
        const book = this.books.find(book => book.title === title);
        book.startReadDate = new Date(Date.now());
    }
    finishReading  = (title) => {
        this.lastBook = title;
        const book = this.books.find(book => book.title === title);
        // console.log(book + ' finish reading book')
        book.read = 'yes'
        this.booksUnread -= 1;
        this.booksRead += 1;
        book.endReadDate = new Date(Date.now()); 
    }
    add = (bookAdd) => {
        this.books.push(bookAdd);
        if (bookAdd.read === 'yes') {
            this.booksRead += 1
        } else {
            this.booksUnread += 1
        }
    }

}
let homeLibrary = new BookList ();

homeLibrary.add(book1);
homeLibrary.add(book4);
homeLibrary.add(book5);
homeLibrary.add(book2);
homeLibrary.add(book3);
// for(i=0; i<homeLibrary.books.length; i++){
    // console.log(homeLibrary.books[i])
// }
homeLibrary.finishReading('Metamorphosis');
homeLibrary.startReading(book1.title);
// console.log(book1,book2,book3,book4,book5)
console.log(homeLibrary.lastBook);
console.log(homeLibrary.currentBook);

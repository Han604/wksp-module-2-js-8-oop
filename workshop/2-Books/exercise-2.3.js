// From 2.1. and 2.2
// Copy over your solutions classes you created in 2.1 and 2.2


// Exercise 2.3
// We need a method in our BookList to make adding books possible.
//  - create an add method to add books to the library.
//      - when you add a book, it should increase the read, or unread count.
//  - use the add method to add in a few books.
//      - you can call new Book without declaring it as variable.
//      - e.g. homeLibrary.add(new Book('The Shining', 'Horror', 'Stephen King'));

// Once you have added a few books, console.log(homeLibrary) to see if all is well.

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

// console.log(book1, book2, book3, book4, book5);

class BookList {
    constructor(){
        this.booksRead = 0;
        this.booksUnread = 0;
        this.books = [];
        this.lastBook = null;
        this.currentBook = null;
        this.upNext = null;
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
homeLibrary.add(book2);
homeLibrary.add(book3);
console.log (homeLibrary);
console.log (homeLibrary.books[1].title);
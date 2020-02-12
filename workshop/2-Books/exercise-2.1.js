// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//      - title, genre, author, read, startReadDate, endReadDate
// Declare the books as book1, book2, book3, book4, book5
//
// Remember that it isn't necessary to pass arguments for all of the parameters.
// if you haven't read the book, there should not be a startReadDate or endReadDate
//
// Console.log them to verify that all is working.

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
console.log(book1, book2, book3, book4, book5);
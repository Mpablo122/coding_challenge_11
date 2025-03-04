//"Task 1 - Created Book Class"

class Book {
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    } // This is too br able to give the class of the book with information in it

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    } //this returns it as a string all together.

    updateCopies(quantity) {
        this.copies += quantity;
    } // this is too show the updated amount for the book
}

// "Task 2 - Created Borrower Class"

class Borrower {
    constructor(name, borrowerId) {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    } // making a class for the borrowers 

    borrowBook(book) {
        this.borrowedBooks.push(book);
    }

    returnBook(book) {
        this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
    } //filtering it as just the book that should be returned 
}

// "Task 3 - Created Library Class"

class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    } //making a class for the library 

    addBook(book) {
        this.books.push(book);
    } // adding the books that should be available in the library

    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }

// "Task 4 - Implemented Book Borrowing"


    lendBook(borrowerId, isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);

        if (book && book.copies > 0 && borrower) {
            book.updateCopies(-1);
            borrower.borrowBook(book.title);
        }
    } //shows the amount of books left after lending 1 

// "Task 5 - Implemented Book Returns"

    returnBook(borrowerId, isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);

        if (book && borrower && borrower.borrowedBooks.includes(book.title)) {
            book.updateCopies(1);
            borrower.returnBook(book.title);
        }
    }
} // shows the amount of copies after book has been returned 


const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());
// Output should be: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"

book1.updateCopies(-1);
console.log(book1.getDetails());
// Output should be: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Output should be: ["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);
// Output should be: []

const library = new Library();
library.addBook(book1);
library.borrowers.push(borrower1);
library.listBooks();
// Output should be: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

library.lendBook(201, 123456);
console.log(book1.getDetails());
// Output should be: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks);
// Output should be: ["The Great Gatsby"]

library.returnBook(201, 123456);
console.log(book1.getDetails());
// Output should be: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"
console.log(borrower1.borrowedBooks);
// Output should bet: []

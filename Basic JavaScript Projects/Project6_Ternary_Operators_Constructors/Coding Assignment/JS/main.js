class Book {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
        this.isRead = false;
    }

    readBook() {
        this.isRead = !this.isRead;
    }
}

// Create three book instances
const book1 = new Book("Book 1 Title", "Author 1", 2020);
const book2 = new Book("Book 2 Title", "Author 2", 2015);
const book3 = new Book("Book 3 Title", "Author 3", 2010);

// Mark one book as read
book1.readBook();

// Update HTML elements with book information and read status
document.getElementById("title1").textContent = book1.title;
document.getElementById("author1").textContent = book1.author;
document.getElementById("publishedYear1").textContent = book1.publishedYear;
document.getElementById("readStatus1").textContent = book1.isRead ? "Read" : "Unread";

document.getElementById("title2").textContent = book2.title;
document.getElementById("author2").textContent = book2.author;
document.getElementById("publishedYear2").textContent = book2.publishedYear;
document.getElementById("readStatus2").textContent = book2.isRead ? "Read" : "Unread";

document.getElementById("title3").textContent = book3.title;
document.getElementById("author3").textContent = book3.author;
document.getElementById("publishedYear3").textContent = book3.publishedYear;
document.getElementById("readStatus3").textContent = book3.isRead ? "Read" : "Unread";

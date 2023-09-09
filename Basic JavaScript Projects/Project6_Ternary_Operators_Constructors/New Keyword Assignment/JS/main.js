// Create a constructor function for Book
function Book(title, author, publishedYear) {
    this.title = title;
    this.author = author;
    this.publishedYear = publishedYear;
}

// Create a new instance of the Book object using the 'new' keyword
const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

// Display book information in the HTML
const outputDiv = document.getElementById("output");

outputDiv.innerHTML = `
    <h2>Book 1</h2>
    <p>Title: ${book1.title}</p>
    <p>Author: ${book1.author}</p>
    <p>Published Year: ${book1.publishedYear}</p>

    <h2>Book 2</h2>
    <p>Title: ${book2.title}</p>
    <p>Author: ${book2.author}</p>
    <p>Published Year: ${book2.publishedYear}</p>
`;

const myLibrary = [];

function Book(title, author, genre, pages) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
}
function updateLibrary() {
  const bookContainerDivs = Array.from(Document.getElementsByClassName("bookContainer"));
  bookContainerDivs.forEach((bookContainer) => bookContainer.remove());
  // TODO: build all book divs from myLibrary
}
function addBookToLibrary() {
  // do stuff here
  const bookData = Array.from(document.getElementsByClassName("input_custom"));
  const newBook = new Book(bookData[0], bookData[1], bookData[2], bookData[3]);
  myLibrary.push(newBook);
  updateLibrary();
}
const btnNewbook = document.getElementById('newbook');
btnNewbook.addeventlistener('click', addBookToLibrary);
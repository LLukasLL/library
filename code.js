const myLibrary = [];
const bookshelf = document.getElementById('bookshelf');
const readSlider = document.getElementById('readSlider');
const btnNewbook = document.getElementById('newbook');

function changeReadStatus(e) {
  const readBtnx = document.getElementById(e.srcElement.id);
  const bookId = e.srcElement.id.substr(3);
  const bookDiv = document.getElementById(bookId);
  const thisReadNode = document.getElementById(`readNode${bookId}`);
  if (readBtnx.innerHTML === 'mark read') {
    readBtnx.innerHTML = 'mark unread';
    myLibrary[bookId].read = 0;
    bookDiv.style['border-left'] = '10px solid #2563eb';
    thisReadNode.innerHTML = 'read';
  } else {
    readBtnx.innerHTML = 'mark read';
    myLibrary[bookId].read = 1;
    bookDiv.style['border-left'] = '10px solid orange';
    thisReadNode.innerHTML = 'unread';
  }
}
function removeBook(e) {
  const bookId = e.srcElement.id.substr(9);
  const bookDiv = document.getElementById(bookId);
  bookDiv.remove();
}
function Book(id, title, author, genre, pages, read) {
  // the constructor...
  this.id = id;
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.read = read;
  this.createBookCard = function () {
    const newBook = document.createElement('div');
    const titleNode = document.createElement('p');
    const authorNode = document.createElement('p');
    const genreNode = document.createElement('p');
    const pagesNode = document.createElement('p');
    const readDiv = document.createElement('div');
    const readNode = document.createElement('p');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    newBook.classList.add('book');
    newBook.setAttribute('id', `${this.id}`);
    titleNode.classList.add('title');
    authorNode.classList.add('author');
    genreNode.classList.add('genre');
    pagesNode.classList.add('pages');
    readDiv.classList.add('readDiv');
    readNode.classList.add('read');
    readNode.setAttribute('id', `readNode${this.id}`);
    readBtn.classList.add('btn', 'btn-outline-success', 'input_custom', 'my-2', 'my-sm-0', 'readBtn');
    readBtn.setAttribute('id', `btn${this.id}`);
    removeBtn.classList.add('btn', 'btn-outline-success', 'input_custom', 'my-2', 'my-sm-0', 'removebtn');
    removeBtn.setAttribute('id', `removeBtn${this.id}`);
    titleNode.innerHTML = this.title;
    authorNode.innerHTML = `by: ${this.author}`;
    genreNode.innerHTML = this.genre;
    pagesNode.innerHTML = `${this.pages} pages`;
    if (read === 0) {
      readNode.innerHTML = 'unread';
      newBook.style['border-left'] = '10px solid orange';
      readBtn.innerHTML = 'mark read';
    } else {
      readNode.innerHTML = 'read';
      newBook.style['border-left'] = '10px solid #2563eb';
      readBtn.innerHTML = 'mark unread';
    }
    removeBtn.innerHTML = 'Remove';
    newBook.appendChild(titleNode);
    newBook.appendChild(authorNode);
    newBook.appendChild(genreNode);
    newBook.appendChild(pagesNode);
    readDiv.appendChild(readNode);
    readDiv.appendChild(readBtn);
    readDiv.appendChild(removeBtn);
    newBook.appendChild(readDiv);
    bookshelf.appendChild(newBook);
    readBtn.addEventListener('click', changeReadStatus);
    removeBtn.addEventListener('click', removeBook);
  };
}
function adjustSliderLabel() {
  const readSliderLabel = document.getElementById('readSliderLabel');
  if (readSlider.value === '0') {
    readSliderLabel.innerHTML = 'unread';
  } else {
    readSliderLabel.innerHTML = 'read';
  }
}
function addBookToLibrary(e) {
  // prevent site reload
  e.preventDefault();
  // get Book Data from form
  const bookData = Array.from(document.getElementsByClassName('input_custom'));
  // create new Book Object
  const newBook = new Book(
    myLibrary.length,
    bookData[0].value,
    bookData[1].value,
    bookData[2].value,
    bookData[3].value,
    bookData[4].value,
  );
  myLibrary.push(newBook);
  newBook.createBookCard();
}
function initializeDummyBooks() {
  const bookOne = new Book(0, 'The Hobbit', 'J.R.R. Tolkien', 'Fantasy', '310', 0);
  const bookTwo = new Book(1, 'The Order of the Phoenix', 'J.K Rowling', 'Fantasy', '1020', 1);
  bookOne.createBookCard();
  bookTwo.createBookCard();
  myLibrary.push(bookOne);
  myLibrary.push(bookTwo);
}
function main() {
  adjustSliderLabel();
  initializeDummyBooks();
  readSlider.addEventListener('input', adjustSliderLabel);
  btnNewbook.addEventListener('click', addBookToLibrary);
}
main();

const myLibrary = [];
function Book(title, author, publisher, year, pages, genre, cover, read) {
  this.title = title;
  this.author = author;
  this.publisher = publisher;
  this.pages = pages;
  this.year = year;
  this.genre = genre;
  this.read = read;
  this.cover = cover;
  this.info = function () {
    if (this.read === "read") {
      return `${this.title} by ${this.author}, ${this.pages} pages, read.`;
    } else {
      return `${this.title} by ${this.author}, ${this.pages} pages, not read yet.`;
    }
  };
}

// click Add-button and open dialog window
const addButton = document.querySelector(".add");
const popUp = document.querySelector("#add-book");
const cancel = document.querySelector("#cancel");

//open dialog
addButton.addEventListener("click", () => {
  popUp.showModal();
});
//close dialog popup
cancel.addEventListener("click", () => {
  popUp.close();
  // alert("dupa");
});
//submit the form
const submit = document.querySelector("#add-form");
const form = document.querySelector("#book-form");
const newBook = document.querySelector(".new-book");

//objects
//new book prototype
function NewBook(title, author, publisher, year, pages, genre, cover) {
  Book.call(this, title, author, publisher, year, pages, genre, cover);
}
// Object.getPrototypeOf(NewBook.prototype);
Object.setPrototypeOf(NewBook.prototype, Book.prototype);
// Object.getPrototypeOf(NewBook.prototype);
// const inputValues = document.querySelectorAll("input, select");

//item - book html

//load books on load time
const shelf = document.querySelector(".inner-main");
document.addEventListener("load", () => {
  if (!myLibrary.length === undefined || !myLibrary.length == 0) {
    //loop through myLibrary to populate items
    for (let i = 0; i < myLibrary.length; i++) {
      const itemHtml = `<div class="item" id="item-${i}">
      <div class="mark">
        <form action="book.js" method="post" id="mark-form">
          <label for="mark">Select</label>
          <input type="checkbox" name="mark">
        </form>
      </div>
     <ul>
      <li> 
        <p class="para-title">Title:</p>
        <p class="para-title-value"></p>
      </li>
      <li>
        <p class="para-author">Author:</p>
        <p class="para-author-value"></p>
      </li>
      <li>
        <p class="para-publisher">Publisher:</p>
        <p class="para-publisher-value"></p>
      </li>
      <li>
        <p class="para-year">Year:</p>
        <p class="para-year-value"></p>
      </li>
      <li>
        <p class="para-pages">Pages:</p>
        <p class="para-pages-value"></p>
      </li>
      <li>
        <p class="para-genre">Genre:</p>
        <p class="para-genre-value"></p>
      </li>
     </ul> 
     
    <div class="read">
      <form action="book.js" method="post"  id="read-form">
        <label for="read">Read</label>
        <input type="checkbox" name="read">
    </div>
     
    </div>`;

      shelf.appendChild(itemHtml);
      const newItem = document.querySelector(`#item-${i}`);
    }
  } else {
    console.log("Empty library");
  }
});

//create new book object
function addBookToLibrary() {
  event.preventDefault();

  //select input values
  const titleInput = document.querySelector("#title-ask").value;
  const authorInput = document.querySelector("#author-ask").value;
  const publisherInput = document.querySelector("#pub-ask").value;
  const yearInput = document.querySelector("#year-ask").value;
  const pagesInput = document.querySelector("#pages-ask").value;
  const genresInput = document.querySelector("#genres").value;
  const coverInput = document.querySelector("#cover-ask").value;

  //assign a name to new book-number-check library length and add 1
  // let numberInLibrary= myLibrary.length;
  //assign new object name
  //  myLibrary.push(new NewBook(titleInput,
  //   authorInput,
  //   publisherInput,
  //   yearInput,
  //   pagesInput,
  //   genresInput,
  //   coverInput));
  const book = new NewBook(
    titleInput,
    authorInput,
    publisherInput,
    yearInput,
    pagesInput,
    genresInput,
    coverInput
  );
  // add to array of library
  myLibrary.push(book);
  //chekin
  let i = myLibrary.length;
  const itemHtml = `<div class="item" id="item-${i}">
  <div class="mark">
    <form action="book.js" method="post" id="mark-form">
      <label for="mark">Select</label>
      <input type="checkbox" name="mark">
    </form>
  </div>
 <ul>
  <li> 
    <p class="para-title">Title:</p>
    <p class="para-title-value"></p>
  </li>
  <li>
    <p class="para-author">Author:</p>
    <p class="para-author-value"></p>
  </li>
  <li>
    <p class="para-publisher">Publisher:</p>
    <p class="para-publisher-value"></p>
  </li>
  <li>
    <p class="para-year">Year:</p>
    <p class="para-year-value"></p>
  </li>
  <li>
    <p class="para-pages">Pages:</p>
    <p class="para-pages-value"></p>
  </li>
  <li>
    <p class="para-genre">Genre:</p>
    <p class="para-genre-value"></p>
  </li>
 </ul> 
 
<div class="read">
  <form action="book.js" method="post"  id="read-form">
    <label for="read">Read</label>
    <input type="checkbox" name="read">
</div>
 
</div>`;
  const newDivItem = document.createElement("div");
  newDivItem.classList.add("new-book");
  newDivItem.innerHTML = itemHtml;
  shelf.appendChild(newDivItem);
  const newItem = document.querySelector(`#item-${i}`);

  // this.reset();
}
submit.addEventListener("click", () => {
  addBookToLibrary();
  // console.log(book1);
  console.log(myLibrary[0]);
  console.log(myLibrary[1]);
  console.log(myLibrary[2]);
  popUp.close();
});

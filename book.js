const myLibrary = [];
function Book(
  title,
  author,
  publisher,
  year,
  pages,
  genre,
  cover,
  read,
  select
) {
  this.select = select;
  this.title = title;
  this.author = author;
  this.publisher = publisher;
  this.pages = pages;
  this.year = year;
  this.genre = genre;

  this.cover = cover;
  this.read = read;
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
function NewBook(
  title,
  author,
  publisher,
  year,
  pages,
  genre,
  cover,
  read,
  select
) {
  Book.call(
    this,
    title,
    author,
    publisher,
    year,
    pages,
    genre,
    cover,
    read,
    select
  );
}
// Object.getPrototypeOf(NewBook.prototype);
Object.setPrototypeOf(NewBook.prototype, Book.prototype);
// Object.getPrototypeOf(NewBook.prototype);
// const inputValues = document.querySelectorAll("input, select");

//item background color randomized
const colors = [
  "#f19b69",
  "#946230",
  "#df7e36",
  "#b1bfa0",
  "#cbd0c9",
  "#f2c5b0",
  "#6d6f56",
  "#eee9c4",
  "#bea854",
  "#fcf4ea",
  "#72888d",
  "#7da9a5",
  "#c0853d",
  "#ec7668",
];
function randomColor(colors) {
  const number = Math.round(Math.random() * 15);

  console.log(`random number is ${number}`);

  return colors[number];
}

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
  console.log(coverInput);

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
  console.log(myLibrary);
  let i = myLibrary.length;
  const itemHtml = `<div class="item" id="item-${i}">
  <div class="mark">
    <form action="book.js" method="post" id="mark-form">
      <label for="mark">Select</label>
      <input type="checkbox" name="mark" id="mark">
    </form>
  </div>
 <ul>
  <li> 
    <p class="para-title">Title:</p>
    <p class="para-title-value">${titleInput}</p>
  </li>
  <li>
    <p class="para-author">Author:</p>
    <p class="para-author-value">${authorInput}</p>
  </li>
  <li>
    <p class="para-publisher">Publisher:</p>
    <p class="para-publisher-value">${publisherInput}</p>
  </li>
  <li>
    <p class="para-year">Year:</p>
    <p class="para-year-value">${yearInput}</p>
  </li>
  <li>
    <p class="para-pages">Pages:</p>
    <p class="para-pages-value">${pagesInput}</p>
  </li>
  <li>
    <p class="para-genre">Genre:</p>
    <p class="para-genre-value">${genresInput}</p>
  </li>
 </ul> 
 
<div class="read">
  <form action="book.js" method="post"  id="read-form">
    <label for="read">Read</label>
    <input type="checkbox"  id="read">
</div>
 
</div>`;
  const newDivItem = document.createElement("div");
  newDivItem.classList.add(`new-book-${i}`);
  newDivItem.innerHTML = itemHtml;

  //assign object's values to inner html

  shelf.appendChild(newDivItem);

  //read checkbox listener
  const readCheckbox = document.querySelector(`#item-${i} #read`);
  readCheckbox.addEventListener("click", () => {
    if (myLibrary[i - 1].read === "read") {
      myLibrary[i - 1].read = "unread";
    } else {
      myLibrary[i - 1].read = "read";
    }
  });
  //select checkbox listener
  const selectCheckBox = document.querySelector(`#item-${i} #mark`);
  selectCheckBox.addEventListener("click", () => {
    if (myLibrary[i - 1].select === "selected") {
      myLibrary[i - 1].select = "unselected";
    } else {
      myLibrary[i - 1].select = "selected";
    }
  });

  // //cover
  // newItem.style.setProperty(`background-image`, `url(${newItem.coverInput}`);
  // this.reset();
  ///set cover
  const randomizedColor = randomColor(colors);
  console.log(randomizedColor);
  const newBookAppended = document.querySelector(`#item-${i}`);
  const filePath = coverInput.name;
  newBookAppended.style.backgroundColor = randomizedColor;
}
const formDialog = document.querySelector("#book-form");
submit.addEventListener("click", () => {
  addBookToLibrary();
  formDialog.reset();
  // console.log(book1);
  console.log(myLibrary[0]);

  // console.log(myLibrary[1]);
  // console.log(myLibrary[2]);
  popUp.close();
});
//remove listener
const removeButton = document.querySelector(".remove");
removeButton.addEventListener("click", () => {
  // loop through library and search for objects select value- selected
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i].select === "selected") {
      const bookToRemove = document.querySelector(`.new-book-${i + 1}`);
      if (bookToRemove) {
        bookToRemove.remove();
      } else {
        console.log("item nof found");
      }
    } else {
      console.log("next object to remove");
    }
  }
});

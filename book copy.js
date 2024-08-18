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
});
// form
const submit = document.querySelector("#add-form");
const form = document.querySelector("#book-form");
const newBook = document.querySelector(".new-book");

console.log("before classes");

const MyLibrary = class {
  constructor() {
    console.log("hello wordl");
    // this.book = _book;
    let _library = [];
    this.library = _library;
  }

  addBookToLibrary(_book) {
    this.library.push(_book);
    let shelf = document.querySelector(".inner-main");

    let i = this.library.length;
    let itemHtml = `<div class="item" id="item-${i}">
  <div class="mark">
    <form action="book.js" method="post" id="mark-form">
      <label for="mark">Select</label>
      <input type="checkbox" name="mark" id="mark">
    </form>
  </div>
 <ul>
  <li> 
    <p class="para-title">Title:</p>
    <p class="para-title-value">${_book.title}</p>
  </li>
  <li>
    <p class="para-author">Author:</p>
    <p class="para-author-value">${_book.author}</p>
  </li>
  <li>
    <p class="para-publisher">Publisher:</p>
    <p class="para-publisher-value">${_book.publisher}</p>
  </li>
  <li>
    <p class="para-year">Year:</p>
    <p class="para-year-value">${_book.year}</p>
  </li>
  <li>
    <p class="para-pages">Pages:</p>
    <p class="para-pages-value">${_book.pages}</p>
  </li>
  <li>
    <p class="para-genre">Genre:</p>
    <p class="para-genre-value">${_book.genre}</p>
  </li>
 </ul> 
 
<div class="read">
  <form action="book.js" method="post"  id="read-form">
    <label for="read">Read</label>
    <input type="checkbox"  id="read">
</div>
 
</div>`;
    let newDivItem = document.createElement("div");
    newDivItem.classList.add(`new-book-${i}`);
    newDivItem.innerHTML = itemHtml;

    //assign object's values to inner html

    shelf.appendChild(newDivItem);

    //read checkbox listener
    let readCheckbox = document.querySelector(`#item-${i} #read`);
    readCheckbox.addEventListener("click", () => {
      if (this.library[i - 1].read === "read") {
        this.library[i - 1].read = "unread";
      } else {
        this.library[i - 1].read = "read";
      }
    });
    //select checkbox listener
    let selectCheckBox = document.querySelector(`#item-${i} #mark`);
    selectCheckBox.addEventListener("click", () => {
      if (this.library[i - 1].select === "selected") {
        this.library[i - 1].select = "unselected";
      } else {
        this.library[i - 1].select = "selected";
      }
    });

    ///set cover
    // const randomizedColor = randomColor(colors);
    // console.log(randomizedColor);
    let newBookAppended = document.querySelector(`#item-${i}`);
    console.log(`i is ${i}`);

    newBookAppended.style.backgroundColor = _book.color;
  }
};

const myLibrary = new MyLibrary();
console.log("wtf");
console.log(`myLibrary is: ${myLibrary.library.length}`);
const Book = class {
  colors = [
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

  constructor() {
    this.title = document.querySelector("#title-ask").value;
    this.author = document.querySelector("#author-ask").value;
    this.publisher = document.querySelector("#pub-ask").value;
    this.year = document.querySelector("#year-ask").value;
    this.pages = document.querySelector("#pages-ask").value;
    this.genre = document.querySelector("#genres").value;
    this.color = this.randomColor();
    this.read = "unread";
    this.select = "unselected";
  }

  create() {
    return new Book(
      this.title,
      this.author,
      this.publisher,
      this.year,
      this.genre,
      this.pages,
      this.color,
      this.select
    );
  }
  randomColor() {
    let number = Math.round(Math.random() * 15);

    console.log(`random number is ${number}`);

    return this.colors[number];
  }
};

//load books on load time
const shelf = document.querySelector(".inner-main");
document.addEventListener("load", () => {
  if (
    !myLibrary.library.length === undefined ||
    !myLibrary.library.length == 0
  ) {
    //loop through myLibrary to populate items
    for (let i = 0; i < myLibrary.library.length; i++) {
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
      // let newItem = document.querySelector(`#item-${i}`);
    }
  } else {
    console.log("Empty library");
  }
});

const formDialog = document.querySelector("#book-form");
submit.addEventListener("click", () => {
  let newBook = new Book();
  myLibrary.addBookToLibrary(newBook);
  formDialog.reset();

  console.log(myLibrary.library[0]);

  popUp.close();
});
//remove listener
const removeButton = document.querySelector(".remove");
removeButton.addEventListener("click", () => {
  // loop through library and search for objects select value- selected
  for (let i = 0; i < myLibrary.library.length; i++) {
    if (myLibrary.library[i].select === "selected") {
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

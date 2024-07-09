const myLibrary = [];
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    if (this.read === "read") {
      return `${this.title} by ${this.author}, ${this.pages} pages, read.`;
    } else {
      return `${this.title} by ${this.author}, ${this.pages} pages, not read yet.`;
    }
  };
}
function addBookToLibrary() {}
// click Add-button and open dialog window
const addButton = document.querySelector(".add");
const popUp = document.querySelector("#add-book");
const cancel = document.querySelector("#cancel");


//open dialog
addButton.addEventListener("click", ()=> {
  popUp.showModal()
});
//close dialog popup
cancel.addEventListener("click", ()=> {
  popUp.close()
  // alert("dupa");
});
//submit the form
const submit=document.querySelector("#add-form");
const form=document.querySelector("#book-form");
const newBook=document.querySelector("new-book");


submit.addEventListener("click",()=>
{
  event.preventDefault();

  
})







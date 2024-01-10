const { constants } = require("fs/promises")

document.addEventListener('DOMContentLoaded', function() {
  let library=[]
  let addBook=document.getElementById('addBook')
  let makeBook=document.getElementById('makeBook')
  let form = document.getElementById('newbook')
  class Book {
    constructor(title, author, pages, read) {
      this.title=title
      this.author=author
      this.pages=pages
      this.read=read
    }
  }
  addBook.addEventListener('click', function() {
    form.style.display=form.style.display=="none" ? "block" : "none"
  })

  makeBook.addEventListener('click', function(event) {
    event.preventDefault()
    const title=document.getElementById('title').value;
    const author=document.getElementById('author').value;
    const pageNumber = document.getElementById('numberpages').value;
    const read=document.getElementById('read').checked;
    const newBook=new Book(title, author, pageNumber, read)
    addBookToLibrary(newBook);
  })
  function addBookToLibrary(book) {
  keyValue(book)
  library.push(book)
  }
  const keyValue=(book) => {
    Object.entries(book).forEach(([key, value]) => {
let bookElement=document.createElement('div')
bookElement.classList.add('book')
bookElement.innerText=`${key}:${value}` 
document.querySelector("#books").appendChild(bookElement)
})
  }})
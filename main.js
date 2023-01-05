let addBook = document.getElementById("addbook");
addBook.addEventListener("click", newBook);
let library = [];
let bookDisplay = document.getElementById("books");

let makeBook = document.getElementById("submit");
makeBook.addEventListener("click", addNewBook);

function newBook() {
  let form = document.getElementById("newbook");
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

function addNewBook() {
  let book = new Books(
    (title = document.getElementById("title").value),
    (author = document.getElementById("author").value),
    (pageNumber = document.getElementById("numberpages").value),
    (read = document.getElementById("dateread").value)
  );
  event.preventDefault();
  library.push(book);
  bookDisplay.innerText = library;
}

class Books {
  constructor(title, author, pageNumber, read) {
    (this.title = title),
      (this.author = author),
      (this.pageNumber = pageNumber),
      (this.read = read);
  }
}

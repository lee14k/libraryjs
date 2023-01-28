let addBook = document.getElementById("addbook");
addBook.addEventListener("click", newBook);
let library = [];
let bookDisplay = document.getElementById("books");
let book 
let libraryList
let newt
let craft = []

let makeBook = document.getElementById("submit");
makeBook.addEventListener("click", addNewBook);


const keyValue = (input) => Object.entries(input).forEach(([key,value]) => {
  let booger = document.createElement('div');
  booger.classList.add("book")
  booger.innerText = (`${key} : ${value}`)
document.querySelector("#books").appendChild(booger)
  console.log(`${key} = ${value}`)
  craft.push(`${key} = ${value}`)
})

//allows form to display

function newBook() {
  let form = document.getElementById("newbook");
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}



function addNewBook() {
  book = new Books(
    (title = document.getElementById("title").value),
    (author = document.getElementById("author").value),
    (pageNumber = document.getElementById("numberpages").value),
    (read = document.getElementById("dateread").value)

  );
  event.preventDefault();
   // console.log(library)
   keyValue(book)
  //bookDisplay.innerText=craft
   console.log(craft)


   

  }



class Books {
  constructor(title, author, pageNumber, read) {
    (this.title = title),
      (this.author = author),
      (this.pageNumber = pageNumber),
      (this.read = read);
  }
}




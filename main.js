let addBook = document.getElementById("addbook");
addBook.addEventListener("click", newBook);
let library = [];
let bookDisplay = document.getElementById("books");
let book 
let libraryList

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

function pushBook () {
  bookDisplay.innerText=""
libraryList = Object.entries(book)
library.push(libraryList);

}


function addNewBook() {
  book = new Books(
    (title = document.getElementById("title").value),
    (author = document.getElementById("author").value),
    (pageNumber = document.getElementById("numberpages").value),
    (read = document.getElementById("dateread").value),


  );
  event.preventDefault();
    pushBook()
   // console.log(library)
   library.forEach (item=> {
    for (i=0;i<item.length;i++){
      console.log(library[i])
      
    //  const element = document.createElement('div')
     //bookDisplay.innerHTML= ""
     //element.innerHTML=Object.entries
    //bookDisplay.appendChild(element)
    //element.classList.add('book')

    }
    
   })

  }



class Books {
  constructor(title, author, pageNumber, read) {
    (this.title = form.title.value),
      (this.author = form.author.value),
        (this.pageNumber = form.pageNumber.value),
          (this.read = form.read.value);
          event.preventDefault()
  }
}




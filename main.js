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
  booger.innerText = (`${key} = ${value}`)
document.body.appendChild(booger)
  console.log(`${key} = ${value}`)
  craft.push(`${key} = ${value}`)
})

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
//libraryList = Object.entries(book)
//library.push(libraryList);

}


function addNewBook() {
  book = new Books(
    (title = document.getElementById("title").value),
    (author = document.getElementById("author").value),
    (pageNumber = document.getElementById("numberpages").value),
    (read = document.getElementById("dateread").value)

  );
  event.preventDefault();
    pushBook()
   // console.log(library)
   keyValue(book)
   bookDisplay.innerText=library
   console.log(craft)


   library.forEach (item=> {
    for (i=0;i<item.length;i++){
      console.log(library[i])
      for (var key in library) {
        console.log(key, library[key]);
      }
      
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
    (this.title = title),
      (this.author = author),
      (this.pageNumber = pageNumber),
      (this.read = read);
  }
}




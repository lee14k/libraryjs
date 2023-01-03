let addBook = document.getElementById('addbook')
addBook.addEventListener('click', newBook)
let library = []


function newBook () {
    let form = document.getElementById('newbook') 
    if (form.style.display === 'none') {
        form.style.display = 'block'
    } else {
        form.style.display='none'
    }
}


class makeBooks {
    constructor(title, author, pageNumber, dateRead) {
        this.title = title,
        this.author  = author,
        this.pageNumber = pageNumber,
        this.read=read
    }
}
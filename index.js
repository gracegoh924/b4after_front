// window.onload = () => {
//     const payload = localStorage.getItem("payload");

//     const payload_parse = JSON.parse(payload)
//     console.log(payload_parse.email)

//     const intro = document.getElementById("intro")
//     intro.innerText = payload_parse.email
// }

//전체 보기(List)
async function loadBook(){
    console.log("here")
    books = await getBooks()
    console.log(books)

    const book_list = document.getElementById("books")

    books.forEach(book => {
        console.log(book)
        const newCard = document.createElement('div')
        const newBook = document.createElement('div')
        const imgBook = document.createElement('img')
        const newDiv = document.createElement('div')
        const titleBook = document.createElement('h5')

        newCard.classList.add('col')
        newBook.classList.add('card')
        imgBook.classList.add('card-img-top')
        newDiv.classList.add('card-body')
        titleBook.classList.add('card-title')

        newCard.setAttribute("id", book.isbn)
        newCard.setAttribute("onclick","bookDetail(this.id)")
        newBook.setAttribute("id", book.category)
        imgBook.setAttribute("src", book.img_l)

        titleBook.innerText = book.book_title

        newDiv.appendChild(titleBook)
        newBook.appendChild(imgBook)
        newBook.appendChild(newDiv)
        newCard.appendChild(newBook)
        book_list.appendChild(newCard)
    });
}

loadBook();
const urlParams = new URLSearchParams(window.location.search);
const book_id = urlParams.get('id');
console.log(book_id)


async function loadBook(book_id){
    const book = await getBookDetail(book_id);
    console.log(book)
    
    const img_url = document.getElementById("img_url")
    const author = document.getElementById("author")
    const publisher = document.getElementById("publisher")
    const description = document.getElementById("description")

    img_url.innerText = book.img_l
    author.innerText = book.book_author
    publisher.innerText = book.book_publisher
    description.innerText = book.summary


    const review_section = document.getElementById("review_section")

    for (let i=0; i<book.reviews.length; i++){
        const new_review_content = document.createElement("p")
        new_review_content.innerText = book.reviews[i].content
        review_section.appendChild(new_review_content)
    }

}


async function writeReview(){
    const review_content = document.getElementById("review_content")
    const review = await postReview(book_id, review_content.value)
}


function reviewupdate(){
    const review_content = document.getElementById("review_section")[1]
    review_content.style.visibility = "hidden"

}


loadBook(book_id)
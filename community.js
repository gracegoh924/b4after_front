async function loadReview_list(){
    reviews = await getReview()
    console.log(reviews)

    const book_list = document.getElementById("review_list")

    reviews.forEach(review => {
        console.log(review)
        const Review = document.createElement("div")
        const Review_user = document.createElement("h5")

        Review.classList.add('card-title')
        Review_user.classList.add('card-title')

        Review.innerText = review.content
        Review_user.innerText = review.user

        book_list.appendChild(Review)
        book_list.appendChild(Review_user)
    });
}

loadReview_list();
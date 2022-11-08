const frontend_base_url = "http://127.0.0.1:5500"
const backend_base_url = "http://127.0.0.1:8000"


async function getBooks(){

    const response = await fetch(`${backend_base_url}/books/explore/`, {
        method: 'GET',
    })

    response_json = await response.json()
    return response_json
}


async function gethome(){

    const response = await fetch(`${backend_base_url}/books/home/`, {
        method: 'GET',
    })

    response_json = await response.json()
    return response_json
}


function bookDetail(book_id){

    console.log(book_id)
    const url = `${frontend_base_url}/book_detail.html?id=${book_id}`
    location.href=url
}

 
async function getBookDetail(book_id){

    const response = await fetch(`${backend_base_url}/books/${book_id}`, {
        method: 'GET',
    })

    response_json = await response.json()
    console.log(response_json)

    return response_json
}


async function postReview(book_id, review_content){

    const reviewData = {
        "content" : review_content
    }

    const response = await fetch(`${backend_base_url}/books/${book_id}/review/`, {
        headers:{
            'Authorization':localStorage.getItem("token"),
            'content-type':'application/json'},
        method:'POST',
        body: JSON.stringify(reviewData)  
    })

    if (response.status == 200){
        return response
    }else{
        alert(response.status)
    }
}


async function getReview(){

    const response = await fetch(`${backend_base_url}/books/community/`, {
        method: 'GET',
    })

    response_json = await response.json()
    return response_json
}



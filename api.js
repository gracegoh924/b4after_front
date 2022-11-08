const frontend_base_url = "http://127.0.0.1:5500"
const backend_base_url = "http://127.0.0.1:8000"
// `${frontend_base_url}/index.html/`


// 로딩이 됐는지 확인하기
window.onload = () => {
    console.log("로딩되었음")
}

// 회원가입
async function handleSignin() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    console.log(email, password)

    const response = await fetch('http://127.0.0.1:8000/users/signup/', {
        headers: {
            'content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    })
    console.log(response)

    // 회원가입 버튼 누르면 이동할 페이지
    window.location.href = 'http://127.0.0.1:5500/login.html'

};

// 로그인
async function handleLogin() {
    // console.log("눌러지고 있습니다!")
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    console.log(email, password)

    const response = await fetch('http://127.0.0.1:8000/users/api/token/', {
        headers: {
            'content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    })

    const response_json = await response.json()

    console.log(response_json)

    localStorage.setItem("access", response_json.access);
    localStorage.setItem("refresh", response_json.refresh);


    const base64Url = response_json.access.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    localStorage.setItem("payload", jsonPayload);

    // 로그인시 이동할 페이지 (탐색 page를 home으로 간주)
    window.location.href = 'http://127.0.0.1:5500/search.html'
    
}

// mock
async function handleMock() {
    const response = await fetch('http://127.0.0.1:8000/users/mock/', {
        headers: {
            // 로컬스토리지 엑세스 토큰을 싣는 방법.
            "Authorization":"Bearer " + localStorage.getItem("access")
        },
        method: 'GET',

    })
    console.log(response)
}


// 로그아웃
function handleLogout() {
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
    localStorage.removeItem("payload")

    // 로그아웃시 이동할 페이지 (확인 필요)
    window.location.href = 'http://127.0.0.1:5500/login.html'

}




async function gethome(){

    const response = await fetch(`${backend_base_url}/books/home/`, {
        method: 'GET',
    })

    response_json = await response.json()
    return response_json
}


// 전체 보기(List)
async function getBook() {
    const response = await fetch('http://127.0.0.1:8000/books/explore/', {
        method:"GET",
    })

    response_json = await response.json()
    console.log(response_json)
    return response_json
}

function bookDetail(book_id){

    console.log(book_id)
    const url = `${frontend_base_url}/book_detail.html?id=${book_id}`
    location.href=url
};

// 검색
async function search() {
    const searchSelect = document.getElementById('search_select').value
    const searchText = document.getElementById('search_text').value

    let params = {
        "searchSelect": searchSelect,
        "searchText": searchText
      };
      
      let query = Object.keys(params)
                   .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                   .join('&');
      
      let url = 'http://127.0.0.1:8000/books/search?' + query;
      
    fetch(url)
    .then(data => data.json())
    .then((text) => {
        const book_list = document.getElementById('books')

        text.forEach(book => {
            book_list.innerHTML += 
            `<div id="cards" class="col">
                <div id="${book.isbn}" class="card" onclick="booksDetail(this.isbn)">
                    <img src="${book.img_l}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${book.book_title}</h5>
                    </div>
                </div>
            </div>`
        })
      console.log('request succeeded with JSON response', text)
    }).catch(function (error) {
      console.log('request failed', error)
    });
};


function bookDetail(book_id){

    console.log(book_id)
    const url = `${frontend_base_url}/book_detail.html?id=${book_id}`
    location.href=url
}


// 상세보기
async function getBookDetail(book_id){

    const response = await fetch(`${backend_base_url}/books/${book_id}`, {
        method: 'GET',
    })

    response_json = await response.json()
    console.log(response_json)

    return response_json
}


// 리뷰 등록
async function postReview(book_id, review_content){

    const reviewData = {
        "content" : review_content
    }

    const response = await fetch(`${backend_base_url}/books/${book_id}/review`, {
        headers:{
            'Authorization':localStorage.getItem("token")},
        method:'POST',
        body:JSON.stringify(reviewData)  
    })

    if (response.status == 200){
        return response
    }else{
        alert(response.status)
    }
}

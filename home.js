console.log("홈js")

async function loadhome(){
    images = await gethome()
    console.log(images)

    const homes = document.getElementById("homes")

    console.log(images)
    console.log(images.top_ten)
    console.log(images.rec_books)
    const img = document.createElement('img')

    img.setAttribute("src", "http://127.0.0.1:8000"+images.top_ten)
    img.setAttribute("src", "http://127.0.0.1:8000"+images.rec_books)


    img.classList.add('card-img-top')

    homes.appendChild(img)
}

loadhome();
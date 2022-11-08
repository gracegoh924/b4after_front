console.log("홈js")

async function loadhome(){
    images = await gethome()
    console.log(images)

    const homes = document.getElementById("homes")

    console.log(images)
    console.log(images.top_ten)
    console.log(images.rec_books)

    const img1 = document.createElement('img')
    const img2 = document.createElement('img')

    img1.setAttribute("src", "http://127.0.0.1:8000"+images.top_ten)
    homes.appendChild(img1)

    img2.setAttribute("src", "http://127.0.0.1:8000"+images.rec_books)


    img1.classList.add('card-img-top')
    img2.classList.add('card-img-top')

    homes.appendChild(img2)
}

loadhome();
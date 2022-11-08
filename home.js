console.log("홈js")

async function loadhome(){
    images = await gethome()
    console.log(images)

    const homes = document.getElementById("homes")

    Array.from(images).forEach(image => {
        console.log(image)
        const img = document.createElement('img')

        img.setAttribute("src", image.top_ten)

        img.classList.add('card-img-top')

        homes.appendChild(img)
    });
}

loadhome();



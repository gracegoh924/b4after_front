function getUser() {
    const config = {
      method: "get"
    };
    fetch("https://jsonplaceholder.typicode.com/users/1", config)
      .then(response => response.json())
      .then(data => {
        const name = document.createElement("div");
        const email = document.createElement("div");
        const phone = document.createElement("div");
        name.textContent = data.name;
        email.textContent = data.email;
        phone.textContent = data.phone;
        const userInfo = document.getElementById("userInfo");
        userInfo.appendChild(name);
        userInfo.appendChild(email);
        userInfo.appendChild(phone);
      })
      .catch(error => console.log("fetch 에러!"));
  }
function getUser() {
    const config = {
      method: "get"
    };
    fetch("https://jsonplaceholder.typicode.com/users/1", config)
      .then(response => response.json())
      .then(data => {
        const email = document.createElement("div");
        email.textContent = data.email;
        const userInfo = document.getElementById("userInfo");
        userInfo.appendChild(email);
      })
      .catch(error => console.log("fetch 에러!"));
  }
const url = "https://jsonplaceholder.typicode.com/users";
const btn = document.querySelector("button");
const inputEmail = document.querySelector(".email");
const inputUsername = document.querySelector(".username");
const body = document.body;
const message = document.createElement("p");
body.append(message);

const userCard = document.createElement("div");
userCard.className = "user-card";
body.appendChild(userCard);

function setAuth(username, email) {
  return fetch(`${url}?username=${username}&email=${email}`).then((reponse) => {
    return reponse.json().then((data) => {
      const user = data.find(
        (user) => user.username === username && user.email === email
      );
      return user;
    });
  });
}
function createAndDisplayUserCard(user) {
  if (user) {
    message.innerText = "You have been logged in";
    message.style.color = "green";
    userCard.innerHTML = `<p>User Name: ${user.name}</p> <p>User Email: ${user.email} </p> `;
  } else {
    message.innerText = "Invalid data";
    message.style.color = "red";
  }
}

btn.addEventListener("click", () => {
  if (inputUsername.value && inputEmail.value) {
    setAuth(inputUsername.value, inputEmail.value).then((user) => {
      createAndDisplayUserCard(user);
    });
  }
});

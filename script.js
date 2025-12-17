document.getElementById("loginBtn").addEventListener("click", function () {

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (username === "" || password === "") {
    message.style.color = "red";
    message.innerText = "Please fill all fields";
    return;
  }

  if (username === "admin" && password === "admin123") {
    message.style.color = "green";
    message.innerText = "Login successful. Welcome!";
  } else {
    message.style.color = "red";
    message.innerText = "Invalid username or password";
  }
});

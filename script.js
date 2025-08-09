const adminLoginBtn = document.getElementById("admin-login-btn");
const adminLoginSection = document.getElementById("admin-login");
const userResponse = document.getElementById("user-response");

adminLoginBtn.addEventListener("click", function () {
  adminLoginSection.style.display = "block";
});

document.getElementById("admin-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const USERNAME = document.getElementById("username").value;
  const PASSWORD = document.getElementById("password").value;

  const userName = "rehan70";
  const passWord = "janu1234";

  if (USERNAME == userName && PASSWORD == passWord) {
    adminLoginSection.style.display = "none";
    const section = document.createElement("section");
    const heading = document.createElement("h2");
    heading.innerHTML = "Welcome to the Admin Panel";
    section.style.backgroundColor = "white";
    const btn = document.createElement("button");
    btn.innerHTML = "Please Come";
    btn.style.marginBottom = "20px";
    btn.addEventListener("click", function () {
      section.style.display = "none";
      userResponse.style.display = "block";
    });
    section.appendChild(heading);
    section.appendChild(btn);

    document.body.appendChild(section);

    // displayUserResponse();
    displayUserResponse();
  } else {
    alert("Invalid Username and Password");
  }
});

const dark = document.getElementById("dark-circle");
const darkAlternative = document.getElementsByClassName("night");

const moonIcon = document.getElementById("moon");
const sunIcon = document.getElementById("sun");

dark.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  for (let i = 0; i < darkAlternative.length; i++) {
    darkAlternative[i].classList.toggle("night-dark");
  }

  const isDarkMode = document.body.classList.contains("dark-mode");
  if (isDarkMode) {
    moonIcon.style.display = "none";
    sunIcon.style.display = "inline";
  } else {
    moonIcon.style.display = "Inline";
    sunIcon.style.display = "none";
  }
});

const userContactForm = document.getElementById("user-contact-form");
userContactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const date = new Date().toLocaleString();

  let response = {
    name,
    email,
    message,
    date,
  };

  let dummyDatabase = JSON.parse(localStorage.getItem("newDB"));
  if (dummyDatabase === null) {
    dummyDatabase = [];
  }

  dummyDatabase.push(response);
  localStorage.setItem("newDB", JSON.stringify(dummyDatabase));

  this.reset();
});

function displayUserResponse() {
  let userResponseSection = document.getElementById("user-response-section");
  let dummyDatabase = JSON.parse(localStorage.getItem("newDB"));
  if (dummyDatabase === null) {
    dummyDatabase = [];
  }

  dummyDatabase.forEach((response) => {
    let responseElement = document.createElement("div");
    responseElement.classList.add("response-card");
    responseElement.innerHTML = `
    <h3>Name : ${response.name}</h3>
    <p>Email : ${response.email}</p>
    <p>Message : ${response.message}</p>
    <p>Date : ${response.date}</p>
    <hr>
    `;

    userResponseSection.appendChild(responseElement);
  });
}

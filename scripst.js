let email = document.getElementById("email");
let password = document.getElementById("password");
let inputBoxEmail = document.getElementById("input-box-email");
let inputBoxPassword = document.getElementById("input-box-password");
let emailIcon = document.querySelector("#email-icon");
let passwordIcon = document.querySelector("#password-icon");
let showPassword = document.querySelector(".eyepassword");

email.addEventListener("focus", () => {
  inputBoxEmail.classList.add("focus"), (emailIcon.src = "img/mail-focus.svg");
});
email.addEventListener("blur", () => {
  inputBoxEmail.classList.remove("focus"), (emailIcon.src = "img/mail.svg");
});
password.addEventListener("focus", () => {
  inputBoxPassword.classList.add("focus"),
    (passwordIcon.src = "img/lock-focus.svg");
});
password.addEventListener("blur", () => {
  inputBoxPassword.classList.remove("focus"),
    (passwordIcon.src = "img/lock.svg");
});

function changeType() {
  if (password.getAttribute("type") == "text") {
    password.setAttribute("type", "password");
  } else {
    password.setAttribute("type", "text");
  }
}

"use strict";

const form = document.querySelector("form");
const login = document.getElementById(`login`);
form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const usernameValue = username.value;
  const passwordValue = password.value;
  validateLogin(usernameValue, passwordValue);
  username.value = "";
  password.value = "";
});

const validateLogin = function (usernameValue, passwordValue) {
  if (usernameValue === `admin` && passwordValue === `password`) {
    window.location.href = "inside.html";
  } else {
    alert("logout");
  }
};

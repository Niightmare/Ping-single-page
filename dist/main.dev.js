"use strict";

function validateEmail(email) {
  var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
}

function validate() {
  var email = document.querySelector("#email");
  var message = email.nextElementSibling;
  !validateEmail(email.value) ? (email.classList.add("input-error"), message.classList.add("error")) : (email.classList.remove("input-error"), message.classList.remove("error"));
}

var submitBtn = document.getElementById("btn-submit");
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  validate();
});
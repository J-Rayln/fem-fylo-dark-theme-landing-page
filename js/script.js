function validation() {
  var form = document.getElementById("email-signup");
  var email = document.getElementById("signup__email").value;
  var text = document.getElementByID("error-text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please enter a valid email address";
  }
  if (email == "") {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
  }
}

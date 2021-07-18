function validateForm() {
  let password = document.forms["signupform"]["password"];
  console.log(password.value);
  let confirmpassword = document.forms["signupform"]["confirmpassword"];
  console.log(confirmpassword.value);
  password.classList.remove("invalid-field");
  confirmpassword.classList.remove("invalid-field");

  if (confirmpassword.value != password.value) {
    console.log("after if");
    confirmpassword.classList.add("invalid-field");
    password.classList.add("invalid-field");

    return false;
  }
}

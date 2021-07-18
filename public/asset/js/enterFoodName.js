function validateForm() {
  let foodName = document.forms["food"]["foodname"];
  let foodType = document.forms["food"]["foodType"];
  let foodPrice = document.forms["food"]["foodPrice"];

  foodName.classList.remove("invalid-field");
  foodType.classList.remove("invalid-field");
  foodPrice.classList.remove("invalid-field");

  if (foodName.value == "") {
    foodName.classList.add("invalid-field");
    return false;
  } else if (foodType.value == "") {
    foodType.classList.add("invalid-field");

    return false;
  } else if (foodPrice.value == "") {
    document.getElementById("foodPrice").style.borderColor = "#db3434";
    foodPrice.classList.add("invalid-field");

    return false;
  }
}

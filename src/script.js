let textElement = document.querySelector("#text");
let buttonElement = document.querySelector("#button");

// Disable submit button if empty
function checkEmpty() {
  let inputValue = textElement.value.trim();
  if (inputValue !== "") {
    buttonElement.classList.remove("disabled");
  } else {
    buttonElement.classList.add("disabled");
  }
}

textElement.addEventListener("input", checkEmpty);

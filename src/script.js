let textElement = document.querySelector("#text");
let buttonElement = document.querySelector("#button");
let welcomeTextElement = document.querySelector("#welcomeText");

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

// Typewriter
function typewriter(location, text) {
  var typeText = new Typewriter(location, {
    loop: false,
    delay: 30,
    cursor: "🌺",
  });

  return typeText.start().typeString(text);
}

function typewriterLoop(location, text) {
  var typeLoop = new Typewriter(location, {
    loop: true,
    delay: 250,
    deleteSpeed: 10,
    cursor: "|",
  });

  return typeLoop.start().typeString(text).deleteAll();
}

typewriter(
  welcomeTextElement,
  "Welcome to <span class='highlight'>Charmed </span>"
);

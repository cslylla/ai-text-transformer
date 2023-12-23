let textElement = document.querySelector("#text");
let buttonElement = document.querySelector("#button");
let welcomeTextElement = document.querySelector("#welcome-text");
let afterTextElement = document.querySelector("#after-text");
let inputFormElement = document.querySelector("#input-form");
let responseElement = document.querySelector("#response");

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
    delay: 300,
    deleteSpeed: 10,
    cursor: "",
  });

  return typeLoop.start().typeString(text).deleteAll();
}

typewriter(
  welcomeTextElement,
  "Welcome to <span class='highlight'>Charmed </span>"
);

//"Loader"
function loader() {
  var typeWait = new Typewriter(welcomeTextElement, {
    loop: false,
    delay: 30,
    cursor: "",
  });

  typeWait.start().typeString("Behold, the metamorphosis commences");

  var typeLoop = new Typewriter(afterTextElement, {
    loop: true,
    deleteSpeed: 200,
    cursor: "",
  });

  typeLoop.start().pauseFor(800).typeString("<b>. . .</b>").deleteAll();
}

//User input
function transformText(event) {
  event.preventDefault();
  loader();
}

inputFormElement.addEventListener("submit", transformText);

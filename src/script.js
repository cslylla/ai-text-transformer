import API_KEY from "./apikey.js";

let buttonElement = document.querySelector("#button");
let inputFormElement = document.querySelector("#input-form");
let responseCardElement = document.querySelector("#response-card");
let responseElement = document.querySelector("#response");

//User input
let userInputElement = document.querySelector("#user-entry");
let userInput = "";

// Disable submit button if empty
function checkEmpty() {
  userInput = userInputElement.value.trim();
  if (userInput !== "") {
    buttonElement.classList.remove("disabled");
  } else {
    buttonElement.classList.add("disabled");
  }
}

userInputElement.addEventListener("input", checkEmpty);

// Typewriter
function typewriter(location, text) {
  var typeText = new Typewriter(location, {
    loop: false,
    delay: 30,
    cursor: "🌺",
  });

  return typeText.start().typeString(text);
}

//User input
async function transformText(event) {
  event.preventDefault();
  responseCardElement.classList.remove("hidden");
  responseElement.innerHTML =
    "<span class = 'loader'>⌛</span> Behold, the metamorphosis commences...";

  //API call
  let apiKey = API_KEY;
  let prompt = `Rephrase the following sentence into the 18th century british era:${userInput}`;
  let context =
    "You are a skilled and talented British writer of the Regency era, equipped with a vast vocabulary and impeccable manners. Your writing exudes elegance and subtle humor. Your task is to generate up to 200 characters of text in basic HTML, ensuring each line is separated by a <br /> tag. Always conclude your response with a <br /> tag, followed by the text containing 'Charmed AI' within a <strong> element. For instance: <p>I beg your pardon for my tardiness; circumstances beyond my control detained me.</p><br /><strong>Charmed AI</strong>";

  let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    typewriter(responseElement, response.data.answer);
  } catch (error) {
    responseElement.innerHTML =
      "🎩 Alas, an unexpected occurrence hath transpired. The jest proved too diverting to be revealed. Allow me to present an error message instead:<br><br><b>" +
      error.message +
      "🤷</b>";
  }
}

inputFormElement.addEventListener("submit", transformText);

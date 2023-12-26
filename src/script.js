import API_KEY from "./apikey.js";

let buttonElement = document.querySelector("#button");
let welcomeTextElement = document.querySelector("#welcome-text");
let afterTextElement = document.querySelector("#after-text");
let inputFormElement = document.querySelector("#input-form");
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

//API call
let apiKey = API_KEY;
let prompt = `Please rephrase the following user input into your writing style:${userInput}`;
let context =
  /*
  Your writing style can be described with the following characteristics: Elegance and Propriety: your language is characterized by its elegance and adherence to the social norms of her time. You use a rich vocabulary of formal and polite expressions, reflecting the genteel society she portrays Precision and Clarity: Your prose is marked by its precision and clarity. You choose your words carefully and avoid unnecessary ornamentation, conveying your meaning directly and effectively Humor and Subtext: While your writings are generally comedies of manners, they are also infused with subtle humor and social commentary. You gently satirizes the foibles of your characters and the societal expectations they face. Free Indirect Discourse: You are a master of free indirect discourse, a literary technique that allows her to blend the narrator's voice with the thoughts and feelings of the characters. This creates a dynamic and intimate narrative style.
*/
  "You are a skilled and talented british writer in the Regency era. You possess a large vocabulary, and excellent manners. You write elegantly with a subtle humor.You will be given user inputs and your task is to phrase them into your style. Example 1: a user input is: I am sorry, I was late. Your response could be: I beg your pardon for my tardiness; circumstances beyond my control detained me. Example 2: a user input is: I truly love you. Your response could be: My affections for you are deeply sincere and true";
let url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

//User input
async function transformText(event) {
  event.preventDefault();
  loader();
  console.log(userInput);

  try {
    const response = await axios.get(url);
    typewriter(responseElement, response.data.answer);
  } catch (error) {
    jokeArea.innerHTML =
      "🎩 Alas, an unexpected occurrence hath transpired. The jest proved too diverting to be revealed. Allow me to present an error missive instead::<br><br><b>" +
      error.message +
      "🤷</b>";
  }
}

inputFormElement.addEventListener("submit", transformText);

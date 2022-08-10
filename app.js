const newQuoteButton = document.getElementById("newQuoteButton");
const adviceNumber = document.getElementById("adviceNumber");
const quoteText = document.getElementById("quote");

newQuoteButton.addEventListener("click", function () {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviceNumber.textContent = data.slip.id;
      quoteText.textContent = data.slip.advice;
    });
});

document.addEventListener("DOMContentLoaded", function () {
  newQuoteButton.click();
});

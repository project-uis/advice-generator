// API endpoint:
const apiUrl = "https://api.adviceslip.com/advice";

const displayElement = document.getElementById("myData");
const advice = document.getElementById("advice");
const blockQuote = document.getElementById("quotes");
// Making a GET request to the API
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error network");
    }
    return response.json();
  })
  .then((data) => {
    advice.textContent = data.slip.id;
    blockQuote.textContent = data.slip.advice;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

const btnClick = document.getElementById("btn");

btnClick.addEventListener("click", function (e) {
  location.reload();
});

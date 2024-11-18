const advice = document.getElementById("advice")
const blockQuote = document.getElementById("quotes")
const btnClick = document.getElementById("btn")

// Function to fetch advice
function fetchAdvice() {
  const apiUrl = `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network error")
      }
      return response.json()
    })
    .then((data) => {
      advice.textContent = `ADVICE #${data.slip.id}`
      blockQuote.textContent = `“${data.slip.advice}”`
    })
    .catch((error) => {
      console.error("Error fetching data:", error)
    })
}

// Fetch advice when the page loads
fetchAdvice()

// Fetch advice when the button is clicked
btnClick.addEventListener("click", function () {
  fetchAdvice()
})

const api = "https://api.adviceslip.com/advice";
async function getData() {
  const response = await fetch(api);
  const data = await response.json();
  console.log(data);
}

getData();

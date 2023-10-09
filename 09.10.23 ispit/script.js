function searchTV() {
  const url = "https://api.tvmaze.com/search/shows?q=girls";
  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      const results = jsonData.map((element) => element.show.name);
      ispis(results);
      document.getElementById("errorM").innerHTML = "";
    })
    .catch((error) => {
      document.getElementById("errorM").innerHTML = error;
      ispis();
    });
}

function ispis(results) {
  const list = document.getElementById("resultsList");
  list.innerHTML = "";
  results.forEach((result) => {
    const element = document.createElement("li");
    element.innerText = result;
    list.appendChild(element);
  });
}

window.onload = () => {
  const searchElement = document.getElementById("search");
  searchElement.onkeyup = (event) => {
    searchTV(searchElement.value);
  };
};

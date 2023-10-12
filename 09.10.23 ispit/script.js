var searchButton = document.querySelector(".search");
var showNameInput = document.querySelector("#showInput");
var loadingMessage = document.querySelector("#loadingMessage");
var table = document.querySelector("table");

searchButton.addEventListener("click", () => {
  const searchTerm = showNameInput.value.toLowerCase();
  const url = `https://api.tvmaze.com/search/shows?q=${searchTerm}`;

  loadingMessage.style.display = "block";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const tbody = document.querySelector("tbody");
      tbody.innerHTML = "";

      const matchingShows = data.filter((result) => {
        const showName = result.show.name.toLowerCase();
        return showName.includes(searchTerm);
      });
      const messageDiv = document.createElement("div");
      messageDiv.style.display = "block";

      if (matchingShows.length === 0) {
        messageDiv.textContent = "Nema rezultata, molim ponoviti unos!";
        table.parentNode.insertBefore(messageDiv, table.nextSibling);
      } else {
        matchingShows.forEach((result) => {
          const show = result.show;
          const row = document.createElement("tr");

          const nameShow = document.createElement("td");
          nameShow.innerText = show.name;

          const scoreEl = document.createElement("td");
          scoreEl.innerText = show.rating ? show.rating.average : "N/A";

          const genreEl = document.createElement("td");
          genreEl.innerText = show.genres.join(", ");

          const summaryEl = document.createElement("td");
          summaryEl.innerHTML = show.summary.replace(/<\/?p>/g, "");
          summaryEl.innerHTML = summaryEl.innerHTML
            .replace(/<b>/g, "")
            .replace(/<\/b>/g, "");

          row.appendChild(nameShow);
          row.appendChild(scoreEl);
          row.appendChild(genreEl);
          row.appendChild(summaryEl);

          tbody.appendChild(row);
        });
      }

      loadingMessage.style.display = "none";
    })
    .catch((error) => {
      console.error(error);
      loadingMessage.style.display = "none";
    });
});

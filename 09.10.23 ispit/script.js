var searchButton = document.querySelector(".search");
var showNameDod = document.querySelector("#showInput");
var loading = document.querySelector("#loading");
var table = document.querySelector("table");

searchButton.addEventListener("click", () => {
  const searchTerm = showNameDod.value.toLowerCase();
  const url = `https://api.tvmaze.com/search/shows?q=${searchTerm}`;

  loading.style.display = "block";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const tbody = document.querySelector("tbody");
      tbody.innerHTML = "";

      const matching = data.filter((result) => {
        const showName = result.show.name.toLowerCase();
        return showName.includes(searchTerm);
      });
      const messageDiv = document.createElement("div");
      messageDiv.style.display = "block";

      if (matching.length === 0) {
        messageDiv.textContent = "Nema rezultata, molim ponoviti unos!";
        table.parentNode.insertBefore(messageDiv, table.nextSibling);
      } else {
        matching.forEach((result) => {
          const show = result.show;
          const row = document.createElement("tr");

          const nameShow = document.createElement("td");
          nameShow.innerText = show.name;

          const ratingShow = document.createElement("td");
          ratingShow.innerText = show.rating ? show.rating.average : "N/A";

          const zanr = document.createElement("td");
          zanr.innerText = show.genres.join(", ");

          const sazetak = document.createElement("td");
          sazetak.innerHTML = show.summary.replace(/<\/?p>/g, "");
          sazetak.innerHTML = sazetak.innerHTML
            .replace(/<b>/g, "")
            .replace(/<\/b>/g, "");

          row.appendChild(nameShow);
          row.appendChild(ratingShow);
          row.appendChild(zanr);
          row.appendChild(sazetak);
          tbody.appendChild(row);
        });
      }

      loading.style.display = "none";
    })
    .catch((error) => {
      console.error(error);
      loading.style.display = "none";
    });
});

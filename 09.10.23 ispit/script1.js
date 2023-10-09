var searchButton = document.querySelector(".search");
var tv = "tv";
searchButton.addEventListener("click", () => {
  const apiURL = "https://api.punkapi.com/v2/" + tv; //link na api

  fetch(url)
    .then((response) => response.json())
    .then((jsonDdataata) => {
      const tbody = document.querySelector("#results tbody");
      tbody.innerHTML = "";
      data.forEach((element) => {
        const row = document.createElement("tr"); //kreiramo novi red u tablici
        const idElement = document.createElement("td"); //kreiramo novi stupac u tablici
        idElement.innerText = element.id; //dohvaćamo stupac "id" iz api zahtjeva i upisujemo ga u "idElement" kreirani stupac
        const nameElement = document.createElement("td");
        nameElement.innerText = element.name; //dohvaćamo stupac "name" iz api zahtjeva i upisujemo ga u "nameElement" kreirani stupac
        const typeElement = document.createElement("td");
        typeElement.innerText = element.volume.unit;
        //dodavanje stupaca kreiranom retku
        row.appendChild(idElement);
        row.appendChild(nameElement);
        row.appendChild(typeElement);
        //dodavanje retka u tablicu
        tbody.appendChild(row);
      });
    })
    .catch((error) => console.error(error));
});

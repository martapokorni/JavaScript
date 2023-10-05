(function () {
  // Koraci:
  // 1. Pohraniti u varijablu vrijednost polja "input"
  var input = document.querySelector("input");
  // 2. Pohraniti u varijablu lokaciju, klasu, koja se nalazi na gumbu button
  var addButton = document.querySelector(".addButton");
  // 3. pohraniti u varijablu lokaciju UL elementa kako bi mu pridodali naknadno LI elemente koje kreiramo klikom na gumb.
  var list = document.querySelector("ul");
  console.log("input:" + input);
  console.log("addButton:" + addButton);
  console.log("list:" + list);
  //kreirati funkciju koja kreira novi LI element klikom na gumb addButton
  //spremiti vrijednost inputa u varijablu -> .value
  //dodati novom li elementu vrijednost inputa
  //vrijednost input polja postavimo da je prazno

  function createItem(text) {
    let item = document.createElement("li");
    item.innerText = text;
    // dodaj novi item u listu:
    list.appendChild(item);
    addRemoveButton(item);
    addCheckbox(item);
  }

  function addItem() {
    let textInput = input.value;
    // pozovi funkaciju kako bi se kreiralo novo polje
    createItem(textInput);
    // kad se vrijednsot teksa spremila, ne kpolje za upis bude prazan
    input.value = "";
  }
  //dodati eventListener na gumb
  addButton.addEventListener("click", addItem);

  //kreiraj funkciju koja briše li element u kojemu se nalazi crveni div element na kojega kliknemo
  function removeItem(event) {
    let removeButton1 = event.target;
    removeButton1.parentNode.remove();
  }

  //kreirati funkciju koja funkcija prima parametar s vrijednosti  varijable gdje je spremljen LI element
  function addRemoveButton(itemAdd) {
    // kreira novi div element
    let removeButton = document.createElement("div");
    //dodati div elementu klasu .removeButton
    removeButton.className = "removeButton";
    //dodati taj novi div iza riječi zapisane u novom LI elementu
    removeButton.addEventListener("click", removeItem);
    itemAdd.appendChild(removeButton);
  }

  //funkcija koja postavlja klasu done na kliknuti element - prekriži tekst
  function markDone(event) {
    let item = event.target;
    item.parentNode.classList.toggle("done");
  }

  //funkcija koja za svaki li element, ispred teksta kreira checkbox
  function addCheckbox(itemAdd) {
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("click", markDone);
    itemAdd.insertBefore(checkbox, itemAdd.firstChild);
  }
})();

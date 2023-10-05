var description = document.querySelector(".description");
var content = description.innerHTML;
console.log(content);

description.innerHTML = "Ima <>4 rijeke</span>";
var image = document.querySelector("img");

image.src = "egipat.jpg";

console.log(image.getAttribute("width"));
image.setAttribute("height", 40);
image.removeAttribute("height");

var ul = document.querySelector("ul");

ul.dataset.index = 2;

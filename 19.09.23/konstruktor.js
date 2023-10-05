//konstruktor - pišemo naziv velikim početnim slovom
//koristimo ga za kreiranje objekata putem ključne riječi "new"
function Dog() {
  this.hasSat = false;
  this.bark = function () {
    return "Wuf Wuf";
  };
  this.doSit = function () {
    this.hasSat = true;
  };
}

var dog = new Dog(); // kreiramo novi objekt iz konstruktora

console.log(dog.bark()); //pozivamo svojstvo bark

//za naprednije: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

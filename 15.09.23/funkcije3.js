function vratiNesto(x) {
  return function () {
    return x;
  };
}

var y = vratiNesto(true)(); //jedne zagrade poziv prvi funkcije, druga zagrada -> poziv funkcije unutar funkcije
console.log(y);

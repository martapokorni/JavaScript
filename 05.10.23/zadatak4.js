// Zad
// Napišite JavaScript funkciju koja prihvaća zadani niz kao argument i pronalazi najdužu riječ unutar niza. Vratite tu riječ iz funkcije i spremite u varijablu čiju ćete vrijednost ispisati u konzoli.

function najduzaRijec(array) {
  var najduza = "";

  array.forEach(function (word) {
    if (word.length > najduza.length) {
      najduza = word;
    }
  });

  return najduza;
}
var word = najduzaRijec([
  "brown",
  "fox",
  "quickest",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
]);
console.log(word);

// Zad3: isto kao 2 samo najkraću riječ

function najkracaRijec(array) {
  var najkraca = word[0];

  array.forEach(function (word) {
    if (word.length !== 0) {
      if (word.length < najkraca.length) {
        najkraca = word;
      }
    }
  });

  return najkraca;
}
var word = najkracaRijec([
  "brown",
  "fox",
  "quickest",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
]);
console.log(word);

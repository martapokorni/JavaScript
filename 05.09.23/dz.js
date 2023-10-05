// 1. Pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.
// 2. Dodajte svoje ime na kraj niza.
// 3. Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon išto ispišete "Jane" izađite iz petlje.
// 4. Napišite naredbu za uklanjanje undefined vrijednosti iz niza. ZADATAK1.JS

//DZ:
//1. Poizgrati se sa Multimensional array: https://www.javascripttutorial.net/javascript-multidimensional-array/
//2. pručiti razliku između FOR OF i FOR IN!

//DZ FUnkcije!
// 1. Napišite JavaScript funkciju koja prihvaća zadani niz kao parametar i pronalazi najdužu riječ unutar niza.
// 2. Vratite tu riječ iz funkcije i spremite u varijablu.
// 3. Ispišite varijablu u konzoli.

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

//Kreirati račun na gitHub: https://github.com/

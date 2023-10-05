// 1. Kreirajte varijable firstName i lastName i spojite ih u varijablu fullName, ali s razmakom ("") između imena i prezimena.

var firstName = "Marta";
var lastName = " Pokorni";
var fullName = firstName + lastName;

console.log(fullName);

// 2. Razlomite ovu ternarnu operaciju na 3 različite operacije!
// var x = z === 2? y : 5;

var x = 10;
var z = 2;
var y = 5;

if (z === 2) {
  console.log(y);
} else {
  console.log(5);
}

// 3. Napišite petlju koja će prolaziti kroz brojeve od 1 do 20. Za svaku će iteraciju provjeriti je li trenutni broj paran ili neparan, i console.log-ati rezultat (npr. "Broj 2 je paran").

var broj = 1;

while (broj <= 20) {
  if (broj % 2 == 0) {
    console.log("Broj " + broj + " je paran.");
  }
  broj++;
}

var names = ["John", "Jane", "Bob", , "Mike"];

// 1. Pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.
for (var i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// 2. Dodajte svoje ime na kraj niza.
names.push("Marta");
console.log(names);
// 3. Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon išto ispišete "Jane" izađite iz petlje.

for (i = 0; i <= names.indexOf("Jane"); i++) {
  console.log(names[i]);
}

// 4. Napišite naredbu za uklanjanje undefined vrijednosti iz niza.
names = names.filter(function (element) {
  return element !== undefined;
});
console.log(names);

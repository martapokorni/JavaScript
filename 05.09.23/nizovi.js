var name1;
var names = ["John", "Jane", "Mike"];
console.log(names[1]);
console.log(typeof names1);
console.log(typeof names);
//dodavanje elementa u niz
names[3] = "Holly";
console.log("Names niz " + names.lenght);

var empty = [];
console.log(empty[0]);
console.log(typeof empty);
console.log(empty.lenght); //veličina niza
//dodavanje elementata u niz
var empty1 = [5, , 4];
console.log(empty1[1]);
console.log(empty1.length);
empty1.push("pas", "macka", "krava");
console.log(empty1);
console.log(empty1.pop());
const sorted = empty1.sort();
console.log(sorted);
const reversed = empty1.reverse();
console.log(reversed);

var animals = ["pas", "macka", "krava"];
console.log(animals);
console.log(animals.pop());
const sorted1 = animals.sort();
console.log(sorted1);
const reversed1 = animals.reverse();
console.log(reversed1);
//ispis vrijednosti niza petljom forEach ---
reversed1.forEach((element) => {
  console.log("forEach " + element);
});

sorted1.forEach((element) => {
  console.log(element);
});

//for petlja za ispis niza
var ispis = ["prvi", "drugi", "treci", "peti"];
//korištenjem petlje FOR ispiši vrijednosti niza
for (var i = 0; i < ispis.length; i++) {
  console.log(ispis[i]);
}

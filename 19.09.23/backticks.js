// const ime = "Ivan";
// const pozdrav = `Moje ime je ${ime}`;
// console.log(pozdrav);

//“Spread” operator (...) dekonstrukcija niza
// function ispisiImena(prvo, drugo, trece) {
//   console.log(trece);
// }
// const x = ["Ivan", "Marija", "David"];
// ispisiImena(...x);

function ispisiImena(...imena) {
  console.log(imena);
}
const x = ["Ivan", "Marija", "David"];
ispisiImena(x);

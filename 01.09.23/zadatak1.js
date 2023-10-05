//Ispisati različitu poruku ovisno koji broj upišemo, jednoznamenkasti, dvoznamenkasti, troznamenkasti.
// Broj X je jednoznamenkast; Broj X je dvoznamenkast; Broj X je troznamenkast, Broj X je veći od 999

var x = 9987;

if (x < 10) {
  console.log("Upisan je jednoznamenkasti broj:  " + x);
} else if (x < 100) {
  console.log("Upisan je dvoznamenkasti broj:  " + x);
} else if (x < 1000) {
  console.log("Upisan je troznamnekasti broj:  " + x);
} else {
  console.log("Upisan je broj: " + x + " koji je veći od 999");
}

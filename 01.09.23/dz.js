/*
1. Napišite program koji će ispisati sve brojeve između 0 i 30 djeljive sa 7
*/

var broj = 0;

while (broj <= 30) {
  if (broj % 7 == 0) {
    console.log(broj);
  }
  broj++;
}

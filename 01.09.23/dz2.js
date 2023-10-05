/*
2. Napišite program koji će zbrojiti sve brojeve između 0 i 100 dijeljive sa 3 
*/

var broj = 0;
zbroj = 0;

while (broj <= 100) {
  if (broj % 3 == 0) zbroj += broj;
  broj++;
}

console.log(zbroj);

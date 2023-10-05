//1. Napišite while petlju koja će ispisivati brojeve od 3 do 20, osim onih djeljivih sa 9.

var x = 3;

while (x <= 20) {
  if (x % 9 != 0) {
    console.log(x);
  }
  x++;
}

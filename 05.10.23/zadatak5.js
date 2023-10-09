//Zad 5
// Koristeći JavaScript dohvatite HTML element preko njegova ID-a "zaglavlje" te mu dodajte novi
// podelement tipa <h1> s tekstom "Naslov" (novi element biti će posljednji podelement svog roditelja).

function header() {
  var x = document.createElement("H1");
  var t = document.createTextNode("Naslov");
  x.appendChild(t);
  document.body.appendChild(x);
}

//ZAd 6
// Koristeći JavaScript dohvatite HTML element preko njegova ID-a "zaglavlje" te ga uklonite iz HTML stabla.

header.remove();

//Zad
//Koristeći JavaScript dohvatite HTML element preko njegova ID-a "zaglavlje" te mu postavite sljedeću pozadinsku boju: "#ddd".
header.style.backgroundColor = "ddd";

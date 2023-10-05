// 1. Kreiraj objekt koji reprezentira neki specifični auto, sa bar 8 svojstava, od kojih su 3 funkcije (npr. ubrzaj, zakoci itd.), a jedna je također objekt. Probajte referencirati druge vrijednosti objekta u funkcijama. Svaka funkcija mora primati argumente i vracati neku vrijednost.

// 2. Pozovite funkcije svog objekta sa argumentima i ispisite rezultat.
// 2. Sa petljom pristupi svim brojivim svojstvima tvog auto objekta i ispiši vrijednosti u konzoli zajedno sa njihovim imenima (kljucevima) (npr. ime: Ivan)
// 3. Ispiši u konzoli razumljivu rečenicu koja uključuje bar 2 svojstva tvog objekta.
// 4. Pretvori svoj objekt u JSON string.

var auto = {
  marka: "Volkswagen",
  godiste: {
    stariji: 2006,
    noviji: 2017,
  },
  tip: "passat",
  snaga: 81,
  boja: "crvena",
  oblik: "karavan",
  mjenjač: "automatski",
  motor: "dizel",
};

console.log(auto);

function kSnaga(snaga) {
  var ks = snaga * 1.341;
  return ks;
}

console.log(kSnaga(81));

console.log(
  "Predstavljamo Vam novi model automobila marke " +
    auto.marka +
    " godišta " +
    auto.godiste.noviji +
    " tipa " +
    auto.tip +
    " sa " +
    auto.motor
);

var ispisObjekta = JSON.stringify(auto);
console.log(ispisObjekta);

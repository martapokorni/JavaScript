class Dog {
  constructor() {}
}

class Golden extends Dog {
  //extends nasljeđuje/proširuje sa svojstvima klase Dog
  constructor(breed) {
    super(); // poziva se konstruktor klase Dog
    this.breed = breed;
  }
}

//DZ: Prepišite Dog i GoldenRetriever klase iz OOP - 2.dio lekcija sa novim class izrazima!

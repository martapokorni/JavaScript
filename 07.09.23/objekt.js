var cat = {};
var dog = {
  breed: "golden retriver",
  bark: function () {
    return "Wuf Wuf";
  },
  "has Toy": false,
};

console.log(cat);
console.log(dog.breed);
console.log(dog.bark);
console.log(dog.bark());

dog.breed = "Pekinezer";
console.log(dog.breed);

var igracka = dog["has Toy"];
console.log(igracka);

cat.color = "grey";
cat.size = 30;
console.log(cat);

//delete dog.bark;

var ispisObjekta = JSON.stringify(dog);
console.log(dog);
console.log(ispisObjekta);

console.log(dog.propertyIsEnumerbale(["has toy"]));

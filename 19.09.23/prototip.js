var person = {
  ime: "Marko",
};

console.log(person.__proto__);

var a = Object.getPrototypeOf(person);
console.log(a);

function Cat() {}

Cat.prototype.glas = "mijauuu";
let kitty = new Cat();
console.log(kitty.glas);

let miky = new Cat();
miky.dlaka = "smeđa";
console.log(miky.dlaka);
console.log(miky.glas);

console.log(kitty.dlaka);
console.log(Object.getPrototypeOf(kitty));
console.log(Object.getPrototypeOf(miky));
console.log(Object.getPrototypeOf(Cat));

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

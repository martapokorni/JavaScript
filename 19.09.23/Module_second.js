// Module-second.js
var a = require("./Module_first");
var module2 = {
  y: function () {
    a.y();
  },
};
console.log(module2.y());

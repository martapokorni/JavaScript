// 2. Napišite test koji testira kod u script.js. Iskoristite bar dvije funkcije podudarnosti.
// 3. U slučaju da test ne prolazi, ispravite grešku i ponovite test dok ne prođe!
function findMax(numbers) {
  var i;
  var max = -Infinity;

  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

module.exports = findMax;

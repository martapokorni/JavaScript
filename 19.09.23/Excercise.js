var Exercise = (function () {
  var steps = 0;
  function increaseSteps() {
    steps++;
  }
  function increaseMoreSteps() {
    steps += 3;
  }

  return {
    getTotalSteps: function () {
      return steps;
    },
    walk: function () {
      increaseSteps();
    },
    run: function () {
      increaseMoreSteps();
    },
  };
})();

module.exports = Exercise;

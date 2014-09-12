'use strict';

var ArrayRotation = (function() {
  function swap(array, position1, position2) {
    var temp = array[position1];
    array[position1] = array[position2];
    array[position2] = temp;
  }

  return {
    rotateInPlace: function(array, steps) {
      var i, step,
        size = array.length;

      if (size === 0) {
        return;
      }

      for (step = 0; step < steps % size; step++) {
        for (i = 1; i < size; i++) {
          swap(array, 0, i);
        }
      }
    }
  };
})();

module.exports.ArrayRotation = ArrayRotation
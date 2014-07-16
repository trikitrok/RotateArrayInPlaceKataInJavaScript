'use strict';

var ArrayRotation = {
  rotateInPlace: function(array, steps) {
    var i, step,
      size = array.length;

    if (steps === 0 || size === 0) {
      return array;
    }

    for (step = 0; step < steps; step++) {
      for (i = 1; i < size; i++) {
        swap(0, i);
      }
    }

    return array;

    function swap(position1, position2) {
      var temp = array[position1];
      array[position1] = array[position2];
      array[position2] = temp;
    }
  }
};

module.exports.ArrayRotation = ArrayRotation
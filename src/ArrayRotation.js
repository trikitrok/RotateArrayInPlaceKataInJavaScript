'use strict';

var ArrayRotation = {
  rotateInPlace: function(array, steps) {
    var i, step,
      size = array.length;

    if (size === 0) {
      return;
    }

    for (step = 0; step < steps % size; step++) {
      for (i = 1; i < size; i++) {
        this.swap(array, 0, i);
      }
    }
  }, 

  swap: function(array, position1, position2) {
    var temp = array[position1];
    array[position1] = array[position2];
    array[position2] = temp;
  }
};

module.exports.ArrayRotation = ArrayRotation
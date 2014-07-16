'use strict';

var ArrayRotation = {
  rotateInPlace: function(array, steps) {
    var temp;

    if (steps === 0 || array.length === 0) {
      return array;
    }

    if (array.length === 2) {
      temp = array[1];
      array[1] = array[0];
      array[0] = temp;
    }

    if (array.length === 3) {
      temp = array[1];
      array[1] = array[0];
      array[0] = temp;  // 2 1 3

      temp = array[2];
      array[2] = array[0];
      array[0] = temp;  // 2 1 3
    }


    return array;
  }
};

module.exports.ArrayRotation = ArrayRotation
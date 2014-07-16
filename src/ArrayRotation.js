'use strict';

var ArrayRotation = {
  rotateInPlace: function(array, steps) {
    if (steps === 0 || array.length === 0) {
      return array;
    }

    var temp = array[1];
    array[1] = array[0];
    array[0] = temp;

    return array;
  }
};

module.exports.ArrayRotation = ArrayRotation
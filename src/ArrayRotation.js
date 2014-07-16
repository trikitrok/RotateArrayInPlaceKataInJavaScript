'use strict';

var ArrayRotation = {
  rotateInPlace: function(array, steps) {
    var temp;

    if (steps === 0 || array.length === 0) {
      return array;
    }

    if (array.length === 2) {
      swap(0, 1);
    }

    if (array.length === 3) {
      swap(0, 1); 
      swap(0, 2);  
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
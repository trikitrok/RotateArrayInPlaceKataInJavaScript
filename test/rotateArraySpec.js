'use strict';

var ArrayRotation = require('../src/ArrayRotation.js').ArrayRotation;

Array.prototype.rotate = function(steps) {
  ArrayRotation.rotateInPlace(this, steps);
};

describe("Array rotation in place", function() {
  it("A rotation by any number of steps on an empty array has no effect", function() {
    var originalArray = [];

    originalArray.rotate(3);

    expect(originalArray).toEqual([]);
  });

  it("A rotation by 0 steps on a non-empty array has no effect", function() {
    var originalArray = [1, 2];

    originalArray.rotate(0);

    expect(originalArray).toEqual([1, 2]);
  });

  it("A rotation by non-zero steps on a non-empty array works as expected", function() {
    var originalArray = [1, 2, 3, 4];

    originalArray.rotate(6);

    expect(originalArray).toEqual([3, 4, 1, 2]);
  });
});
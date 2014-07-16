'use strict';

var ArrayRotation = require("../src/ArrayRotation.js").ArrayRotation;

describe("Array rotation in place", function() {
  it("An empty array does not change", function() {
    var originalArray = [],
      resultingArray = ArrayRotation.rotateInPlace(
        originalArray, 3
      );

    expect(resultingArray).toBe(originalArray);
    expect(resultingArray).toEqual([]);
  });

  it("A rotation by 0 steps does not change the array", function() {
    var originalArray = [1, 2],
      resultingArray = ArrayRotation.rotateInPlace(
        originalArray, 0
      );

    expect(resultingArray).toBe(originalArray);
    expect(resultingArray).toEqual([1, 2]);
  });

  it("A rotation by a number of steps that is less than the array size", function() {
    var originalArray = [1, 2, 3, 4],
      resultingArray = ArrayRotation.rotateInPlace(
        originalArray, 2
      );

    expect(resultingArray).toBe(originalArray);
    expect(resultingArray).toEqual([3, 4, 1, 2]);
  });
});
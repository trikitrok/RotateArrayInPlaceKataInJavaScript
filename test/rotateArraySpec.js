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

  it("A non empty array rotated by 0 steps does not change", function() {
    var originalArray = [1, 2],
      resultingArray = ArrayRotation.rotateInPlace(
        originalArray, 0
      );

    expect(resultingArray).toBe(originalArray);
    expect(resultingArray).toEqual([1, 2]);
  });
});
'use strict';

var ArrayRotation = require("../src/ArrayRotation.js").ArrayRotation;

describe("Array rotation in place", function() {
  it("An empty array does not change", function() {
    var originalArray = [];

    ArrayRotation.rotateInPlace(
      originalArray, 3
    );

    expect(originalArray).toEqual([]);
  });

  it("A rotation by 0 steps does not change the array", function() {
    var originalArray = [1, 2];

    ArrayRotation.rotateInPlace(
      originalArray, 0
    );

    expect(originalArray).toEqual([1, 2]);
  });

  it("A rotation by non-zero steps on a non-empty array", function() {
    var originalArray = [1, 2, 3, 4];

    ArrayRotation.rotateInPlace(
      originalArray, 6
    );

    expect(originalArray).toEqual([3, 4, 1, 2]);
  });
});
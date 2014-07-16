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

  it("A rotation by 1 step changes an array of size 2", function() {
    var originalArray = [1, 2],
      resultingArray = ArrayRotation.rotateInPlace(
        originalArray, 1
      );

    expect(resultingArray).toBe(originalArray);
    expect(resultingArray).toEqual([2, 1]);
  });

  it("A rotation by 1 step changes an array of size 3", function() {
    var originalArray = [1, 2, 3],
      resultingArray = ArrayRotation.rotateInPlace(
        originalArray, 1
      );

    expect(resultingArray).toBe(originalArray);
    expect(resultingArray).toEqual([3, 1, 2]);
  });

  it("A rotation by 1 step changes an array of size 4", function() {
    var originalArray = [1, 2, 3, 4],
      resultingArray = ArrayRotation.rotateInPlace(
        originalArray, 1
      );

    expect(resultingArray).toBe(originalArray);
    expect(resultingArray).toEqual([4, 1, 2, 3]);
  });


});
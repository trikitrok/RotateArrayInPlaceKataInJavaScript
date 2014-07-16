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

  it("A rotation by a number of steps that is less than the array size", function() {
    var originalArray = [1, 2, 3, 4];

    ArrayRotation.rotateInPlace(
      originalArray, 2
    );

    expect(originalArray).toEqual([3, 4, 1, 2]);
  });

  it("A rotation by a number of steps that is greater or equal than the array size", function() {
    var originalArray = [1, 2, 3, 4];

    spyOn(ArrayRotation, 'swap').andCallThrough();

    ArrayRotation.rotateInPlace(
      originalArray, 6
    );

    expect(originalArray).toEqual([3, 4, 1, 2]);
    expect(ArrayRotation.swap.callCount).toBe(6);
  });
});
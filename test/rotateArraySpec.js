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
});
'use strict';

var ArrayRotation = require("../src/ArrayRotation.js").ArrayRotation;

describe("Array rotation in place", function() {
  it("An empty array does not change", function() {
    var array = [];

    expect(ArrayRotation.rotateInPlace(array, 3))
      .toBe(array);
  });
});
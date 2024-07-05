assert = require("assert");

function reduce(arr, fn, initValue, i = 0) {
  let acc =
    initValue ??
    ((i = 1), typeof arr[0] === "number" ? arr[0] : fn("", arr[0]));
  for (; i < arr.length; i += 1) {
    acc = fn(acc, arr[i]);
  }
  return acc;
}

assert.deepStrictEqual(
  reduce([1, 2, 3], (a, b) => a + b, 0),
  6
);
assert.deepStrictEqual(
  reduce([1, 2, 3, 4, 5], (a, b) => a + b),
  15
);
assert.deepStrictEqual(
  reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1),
  120
);
assert.deepStrictEqual(
  reduce([2, 2, 2], (a, b) => a * b),
  8
);
assert.deepStrictEqual(
  reduce([3, 3, 3], (a, b) => a * b, 0),
  0
);

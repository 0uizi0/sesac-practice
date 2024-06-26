assert = require("assert");

const keyPair = (arr, n) => {
  const val_idx = {}; // {key: index}
  for (let i = 0; i < arr.length; i += 1) {
    const v = arr[i];
    if (val_idx[v]) return [val_idx[v], i];
    val_idx[n - v] ??= i;
  }
};

assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [3, 4]);

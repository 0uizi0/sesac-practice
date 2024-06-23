assert = require("assert");

const push = (arr, ...args) => [...arr, ...args];

const pop = (arr, deleteCnt = 1) => {
  const ret = arr.slice(-`${deleteCnt}`);
  return ret.length == 1 ? ret[0] : ret;
};

const unshift = (arr, ...args) => [...args, ...arr];

const shift = (arr, deleteCnt = 1) => {
  const ret = arr.slice(deleteCnt);
  return ret.length == 1 ? ret[0] : ret;
};

const arr = [1, 2, 3, 4];
assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝!
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);
assert.deepStrictEqual(shift(arr), [2, 3, 4]);
assert.deepStrictEqual(shift(arr, 2), [3, 4]);
assert.deepStrictEqual(shift(arr, 3), 4);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

assert = require("assert");

const deleteArray = (data, sIdx, eIdx = data.length) => {
  if (typeof sIdx == "number") return data.toSpliced(sIdx, eIdx - sIdx);

  const [k, v] = [sIdx, eIdx];
  const findIdx = data.findIndex((obj) => obj[k] == v);
  return data.toSpliced(findIdx, 1);
};

const arr = [1, 2, 3, 4];
assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]);
assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]);
assert.deepStrictEqual(arr, [1, 2, 3, 4]);

const Hong = { id: 1, name: "Hong" };
const Kim = { id: 2, name: "Kim" };
const Lee = { id: 3, name: "Lee" };
const users = [Hong, Kim, Lee];

assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, "id", 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, "name", "Lee"), [Hong, Kim]);

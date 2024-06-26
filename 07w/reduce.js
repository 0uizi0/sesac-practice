assert = require("assert");

// TODO: 주석(object - id 테스트케이스) 해결 필요
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

/** 도전중인 테스트케이스 */
const users = [
  { id: 1, name: "Hong" },
  { id: 20, name: "Kim" },
  { id: 3, name: "Lee" },
];

assert.deepStrictEqual(
  reduce(users, (acc, user) => acc + user.name),
  "HongKimLee"
);
// assert.deepStrictEqual(
//   reduce(users, (acc, user) => acc + user.id),
//   24
// );

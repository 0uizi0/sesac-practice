assert = require("assert");

function checkOP(fn) {
  const formula = fn.toString();
  if (formula.includes("+")) return "+";
  if (formula.includes("-")) return "-";
  if (formula.includes("*")) return "*";
  if (formula.includes("/")) return "/";
}

function reduce(arr, fn, initValue) {
  const op = checkOP(fn);
  if (initValue == undefined) {
    initValue = op == "+" || op == "-" ? 0 : 1;
  }
  for (let a of arr) {
    if (op == "+") initValue += a;
    if (op == "-") initValue -= a;
    if (op == "*") initValue *= a;
    if (op == "/") initValue /= a;
  }
  return initValue;
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

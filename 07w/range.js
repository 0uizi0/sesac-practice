assert = require("assert");

function getPNums(s, e) {
  const arr = [];
  for (let i = s; i <= e; i += 1) {
    arr.push(i);
  }
  return arr;
}

function range(start, end, step) {
  if (end == undefined) {
    return start == 0
      ? [0]
      : start > 0
      ? getPNums(1, start)
      : getPNums(start, -1);
  }

  if (step == undefined) {
    step = start <= end ? 1 : -1;
  }

  const scope = end >= start ? end - start + 1 : start - end + 1;
  const len = end == undefined ? start : Math.ceil(scope / Math.abs(step));
  const pNums = getPNums(Math.min(start, end), Math.max(start, end));

  if (step == 0 || start == end) return [start];
  if (step >= 0 && !pNums.includes(start)) return [];

  const arr = Array(len).fill(0);
  let ret = start;
  return arr.reduce((acc) => {
    if (!pNums.includes(ret)) return [];
    acc.push(ret);
    ret += step;
    return acc;
  }, []);
}

// wrong input
assert.deepStrictEqual(range(5, 5, 0), [5]);
assert.deepStrictEqual(range(1, 5, 0), [1]);
assert.deepStrictEqual(range(0, 0), [0]);
assert.deepStrictEqual(range(5, 5, -1), [5]);
assert.deepStrictEqual(range(5, 5), [5]);
assert.deepStrictEqual(range(0, 0, 5), [0]);

// up
assert.deepStrictEqual(range(1, 5, -1), []);
assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9]); // [1, 3, 5, 7, 9]
assert.deepStrictEqual(range(1, 5, 6), [1]);
assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(-3, 0), [-3, -2, -1, 0]);

// down
assert.deepStrictEqual(range(5, 1, 1), []);
assert.deepStrictEqual(range(0, -1, -5), [0]);
assert.deepStrictEqual(range(2, 1, -5), [2]);
assert.deepStrictEqual(range(0, -1), [0, -1]);
assert.deepStrictEqual(range(0, -3), [0, -1, -2, -3]);
assert.deepStrictEqual(range(5, 1), [5, 4, 3, 2, 1]);
assert.deepStrictEqual(range(10, 1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
assert.deepStrictEqual(range(10, 1, -2), [10, 8, 6, 4, 2]);

// up & down
assert.deepStrictEqual(range(5), [1, 2, 3, 4, 5]);
assert.deepStrictEqual(
  range(100),
  [...new Array(100)].map((_, i) => i + 1)
);
assert.deepStrictEqual(range(0), [0]);
assert.deepStrictEqual(range(-5), [-5, -4, -3, -2, -1]);

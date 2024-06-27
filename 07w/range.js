assert = require("assert");

/**
 * [규칙]
 * - step === 0 || s === e ? [s]
 * - step의 기본값 = s > e ? -1 : 1
 * - e가 없다면
 *    - s === 0 ? [0]
 *    - s < 0 ? e = -1
 *    - s > 0 ? (e = s, s = 1)
 * - 비정상 => (s - e) * step > 0인 경우 : []
 */
function range(s, e, step = s > e ? -1 : 1) {
  if (step === 0 || s === e) return [s];

  const t = s;
  e = e ?? (s === 0 ? 0 : s < 0 ? -1 : ((s = 1), (e = t)));
  if ((s - e) * step > 0) return [];

  const ret = [];
  for (let i = s; s > e ? i >= e : i <= e; i += step) {
    ret.push(i);
  }
  return ret;
}

// step === 0 또는 s === e 인 경우
assert.deepStrictEqual(range(5, 5, 0), [5]);
assert.deepStrictEqual(range(1, 5, 0), [1]);
assert.deepStrictEqual(range(5, 5, -1), [5]);
assert.deepStrictEqual(range(0, 0, 5), [0]);

// step 기본값이 없는 경우
assert.deepStrictEqual(range(0, 0), [0]);
assert.deepStrictEqual(range(5, 5), [5]);
assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(-3, 0), [-3, -2, -1, 0]);
assert.deepStrictEqual(range(0, -1), [0, -1]);
assert.deepStrictEqual(range(0, -3), [0, -1, -2, -3]);
assert.deepStrictEqual(range(5, 1), [5, 4, 3, 2, 1]);
assert.deepStrictEqual(range(10, 1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

// e가 없는 경우
assert.deepStrictEqual(range(5), [1, 2, 3, 4, 5]);
assert.deepStrictEqual(
  range(100),
  [...new Array(100)].map((_, i) => i + 1)
);
assert.deepStrictEqual(range(0), [0]);
assert.deepStrictEqual(range(-5), [-5, -4, -3, -2, -1]);

// 비정상인 경우
assert.deepStrictEqual(range(1, 5, -1), []);
assert.deepStrictEqual(range(5, 1, 1), []);

// 정상적인 경우
assert.deepStrictEqual(range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);
assert.deepStrictEqual(range(1, 5, 6), [1]);
assert.deepStrictEqual(range(0, -1, -5), [0]);
assert.deepStrictEqual(range(2, 1, -5), [2]);
assert.deepStrictEqual(range(10, 1, -2), [10, 8, 6, 4, 2]);

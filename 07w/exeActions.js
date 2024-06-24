assert = require("assert");

const square = (n) => n ** 2;
const sqrt = (n) => Math.sqrt(n);
const cube = (n) => n ** 3;
const testCase = [1, 2, 3, 4, 5];
const orders = [square, sqrt, cube];

/** 정해진 순서로 계산된 값을 구하는 함수 getV */
const getV = (arr) =>
  arr.reduce((acc, cur) => {
    const ret = cube(sqrt(square(cur)));
    acc.push(ret);
    return acc;
  }, []);
assert.deepStrictEqual(getV(testCase), [1, 8, 27, 64, 125]);

/** 수행 순서가 변경 가능한 함수 exeActions */
const exeActions = (fns, arr) => {
  return arr.reduce((acc, cur) => {
    const ret = fns.reduce((v, a) => a(v), cur);
    acc.push(ret);
    return acc;
  }, []);
};
assert.deepStrictEqual(exeActions(orders, testCase), [1, 8, 27, 64, 125]);

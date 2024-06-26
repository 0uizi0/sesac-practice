/* ex1) 배열의 각 원소를 String으로 변환하시오. */
assert = require("assert");
const arr = [1, 2, 3, true];
const ret1 = arr.map(String);
assert.deepStrictEqual(ret1, ["1", "2", "3", "true"]);

/* ex2) 다음과 같이 작동하는 classNames 함수를 작성하시오. */
const classNames = (...args) =>
  args.reduce((acc, cur) => `${acc}${acc && cur && " "}${cur}`);

const ret2 = classNames("", "a b c", "d", "", "e");
assert.strictEqual(ret2, "a b c d e");

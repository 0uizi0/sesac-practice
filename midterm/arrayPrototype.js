// Array 기능 구현하기
const assert = require("assert");

Array.prototype.uniqBy = function (k) {
  return [...new Set(this.map((a) => a[k]))];
};

const hong = { id: 1, name: "Hong", dept: "HR" };
const kim = { id: 2, name: "Kim", dept: "Server" };
const lee = { id: 3, name: "Lee", dept: "Front" };
const park = { id: 4, name: "Park", dept: "HR" };
const ko = { id: 7, name: "Ko", dept: "Server" };
const loon = { id: 6, name: "Loon", dept: "Sales" };
const choi = { id: 5, name: "Choi", dept: "Front" };
const users = [hong, kim, lee, park, ko, loon, choi];
assert.deepStrictEqual(users.uniqBy("dept"), [
  "HR",
  "Server",
  "Front",
  "Sales",
]);

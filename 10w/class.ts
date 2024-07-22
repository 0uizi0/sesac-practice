import * as assert from "assert";

declare global {
  interface Array<T> {
    K: keyof T;
    // Array interface 병합
    mapBy: <K extends keyof T>(k: K) => T[K][];
    uniqBy: <K extends keyof T>(k: K) => T[K][];
    findBy: <K extends keyof T>(k: K, v: T[K]) => T[];
    filterBy: <K extends keyof T>(k: K, v: T[K]) => T[];
    rejectBy: <K extends keyof T>(k: K, v: T[K]) => T[];
    sortBy: (k: string) => T[];
  }
}

Array.prototype.uniqBy = function (k) {
  return [...new Set(this.map((t) => t[k]))];
};
Array.prototype.mapBy = function (k) {
  return this.map((t) => t[k]);
};
Array.prototype.findBy = function (k, v) {
  return this.find((t) => t[k] === v);
};
Array.prototype.filterBy = function (k, v) {
  return this.filter((t) => t[k] === v);
};
Array.prototype.rejectBy = function (k, v) {
  return this.filter((t) => t[k] !== v);
};
Array.prototype.sortBy = function (prop) {
  const [k, direction] = prop.split(":");
  let dNum = 1;
  if (direction === "desc") dNum = -1;
  return [...this].sort((a, b) => (a[k as string] > b[k as string] ? dNum : dNum * -1));
};

// Object.defineProperties(Array.prototype, {
//   firstObject: {
//     get: function () {
//       return this[0];
//     },
//   },
//   lastObject: {
//     get: function () {
//       return this.at(-1);
//     },
//   },
// });

const arr = [1, 2, 3, 4, 5]; // arr.firstObject; // 1    arr.lastObject; // 5
const hong = { id: 1, name: "Hong", dept: "HR" };
const kim = { id: 2, name: "Kim", dept: "Server" };
const lee = { id: 3, name: "Lee", dept: "Front" };
const park = { id: 4, name: "Park", dept: "HR" };
const ko = { id: 7, name: "Ko", dept: "Server" };
const loon = { id: 6, name: "Loon", dept: "Sales" };
const choi = { id: 5, name: "Choi", dept: "Front" };
const userss = [hong, kim, lee, park, ko, loon, choi];
const users = [hong, lee, kim];

assert.deepStrictEqual(users.mapBy("id"), [1, 3, 2]);
assert.deepStrictEqual(users.mapBy("name"), ["Hong", "Lee", "Kim"]);
assert.deepStrictEqual(users.filterBy("id", 2), [kim]);
assert.deepStrictEqual(users.rejectBy("id", 2), [hong, lee]);
assert.deepStrictEqual(users.findBy("name", "Kim"), kim);
assert.deepStrictEqual(users.sortBy("name"), [hong, kim, lee]);
assert.deepStrictEqual(users.sortBy("name:desc"), [lee, kim, hong]);
// assert.deepStrictEqual(users.firstObject, hong);
// assert.deepStrictEqual(users.lastObject, kim);
assert.deepStrictEqual(userss.uniqBy("dept"), [
  "HR",
  "Server",
  "Front",
  "Sales",
]);

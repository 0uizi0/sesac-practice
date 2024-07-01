assert = require("assert");

const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const users = [hong, lee, kim];

users.mapBy = function (k) {
  return this.map((t) => t[k]);
};

users.filterBy = function (k, v) {
  return this.filter((t) => t[k] === v);
};

users.rejectBy = function (k, v) {
  return this.filter((t) => t[k] !== v);
};

users.findBy = function (k, v) {
  for (t of this) {
    if (t[k] == v) return t;
  }
};

users.sortBy = function (k) {
  let [key, direction] = k.split(":");
  direction ??= "asc";
  const dAction =
    direction === "asc"
      ? (a, b) => (a[key] > b[key] ? 1 : -1)
      : (a, b) => (a[key] > b[key] ? -1 : 1);
  return this.toSorted(dAction);
};

Object.defineProperties(users, {
  mapBy: { enumerable: false },
  findBy: { enumerable: false },
  filterBy: { enumerable: false },
  rejectBy: { enumerable: false },
  sortBy: { enumerable: false },
  firstObject: {
    get: function () {
      return this[0];
    },
  },
  lastObject: {
    get: function () {
      return this[this.length - 1];
    },
  },
});

assert.deepStrictEqual(users.mapBy("id"), [1, 3, 2]);
assert.deepStrictEqual(users.mapBy("name"), ["Hong", "Lee", "Kim"]);
assert.deepStrictEqual(users.filterBy("id", 2), [kim]);
assert.deepStrictEqual(users.rejectBy("id", 2), [hong, lee]);
assert.deepStrictEqual(users.findBy("name", "Kim"), kim);
assert.deepStrictEqual(users.sortBy("name"), [hong, kim, lee]);
assert.deepStrictEqual(users.sortBy("name:desc"), [lee, kim, hong]);
assert.deepStrictEqual(users.firstObject, hong);
assert.deepStrictEqual(users.lastObject, kim);

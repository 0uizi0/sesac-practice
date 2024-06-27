const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };
const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [kim, lee, park]; // 오염되면 안됨!!

users.addUser = function (data) {
  return [...this, data];
};

users.removeUser = function (data) {
  return this.filter((t) => data.id !== t.id);
};

users.changeUser = function (dData, aData) {
  return this.map((t) => (t.id === dData.id ? aData : t));
};

Object.defineProperties(users, {
  addUser: { enumerable: false },
  removeUser: { enumerable: false },
  changeUser: { enumerable: false },
});

console.log(users.addUser(hong)); // [kim, lee, park, hong]
console.log(users.removeUser(lee)); // [kim, park]
console.log(users.changeUser(kim, choi)); // [choi, lee, park]

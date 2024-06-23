const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };
const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [kim, lee, park]; // 오염되면 안됨!!

Object.prototype.addUser = function (data) {
  return [...this, data];
};

Object.prototype.removeUser = function (data) {
  let ret = [];
  for (let t of this) {
    if (t.id !== data.id) {
      ret = [...ret, t];
    }
  }
  return ret;
};
Object.prototype.changeUser = function (dData, aData) {
  let ret = [];
  for (let t of this) {
    ret = t.id == dData.id ? [...ret, aData] : [...ret, t];
  }
  return ret;
};

console.log(users.addUser(hong)); // [kim, lee, park, hong]
console.log(users.removeUser(lee)); // [kim, park]
console.log(users.changeUser(kim, choi)); // [choi, lee, park]

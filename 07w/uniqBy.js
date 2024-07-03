const hong = { id: 1, name: "Hong", dept: "HR" };
const kim = { id: 2, name: "Kim", dept: "Server" };
const lee = { id: 3, name: "Lee", dept: "Front" };
const park = { id: 4, name: "Park", dept: "HR" };
const ko = { id: 7, name: "Ko", dept: "Server" };
const loon = { id: 6, name: "Loon", dept: "Sales" };
const choi = { id: 5, name: "Choi", dept: "Front" };
const users = [hong, kim, lee, park, ko, loon, choi];

users.uniqBy = function (k) {
  const uniq = new Set(this.map((user) => user[k]));
  return [...uniq];
};

Object.defineProperties(users, {
  uniqBy: { enumerable: false },
});

console.log(users.uniqBy("dept")); // [ 'HR', 'Server', 'Front', 'Sales' ]

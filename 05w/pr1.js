const hong = { id: 1, name: "Hong" };
const lee = { id: 2, name: "Lee" };
const kim = { id: 3, name: "Kim" };

const f1 = (user) => {
  const { id, name } = user;
  console.log(id, name);
};
f1(hong); // 1 Hong

const f2 = ({ id, name } = user) => {
  console.log(id, name);
};
f2(lee); // 2 Lee

const f3 = ({ id, name }) => {
  console.log(id, name);
};
f3(kim); // 3 Kim

const f4 = ({ id: id, name: name }) => {
  console.log(id, name);
};
f4(kim); // 3 Kim

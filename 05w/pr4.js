const user = { name: "Hong", passwd: "xyz", addr: "Seoul" };
function getValueExceptInitial(k) {
  const { [k]: v } = user;
  const [, ...rest] = [...v];
  return rest.join("");
}

console.log(getValueExceptInitial("name")); // ong
console.log(getValueExceptInitial("passwd")); // yz
console.log(getValueExceptInitial("addr")); // eoul

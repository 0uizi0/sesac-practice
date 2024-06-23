assert = require("assert");

const objs = [{ id: 1 }, { name: "Hong" }, { addr: "Seoul", id: 5 }];
// const obj = objs.reduce((acc, user) => Object.assign(acc, user, {}), {});
const obj = objs.reduce((acc, user) => ({ ...acc, ...user }), {});
console.log("🚀 obj:", obj);

assert.deepStrictEqual(obj, { id: 5, name: "Hong", addr: "Seoul" });

assert = require("assert");

class Emp {
  firstName;
  lastName;
}

const handler = {
  get(target, prop) {
    if (prop === "fullName") return `${target.firstName} ${target.lastName}`;
    return target[prop];
  },
  set(target, prop, value) {
    if (prop !== "fullName") target[prop] = value;
    if (!value.includes(" ")) target.lastName = value.toUpperCase();
    else {
      const [f, l] = value.split(" ");
      target.firstName = f;
      target.lastName = l.toUpperCase();
    }
    return target;
  },
};

const hong = new Proxy(new Emp(), handler);
hong.fullName = "Kildong Hong";
assert.deepStrictEqual(hong.fullName, "Kildong HONG");
hong.fullName = "Lee";
assert.deepStrictEqual((hong.firstName, hong.lastName), ("Kildong", "LEE"));

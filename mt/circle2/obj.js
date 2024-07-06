export class Emp {
  firstName;
  lastName;

  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        if (prop === "fullName") {
          return `${target.firstName} ${target.lastName}`;
        }
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
    });
  }
}

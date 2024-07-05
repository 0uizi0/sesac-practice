/** [질문. midterm/proxy(기존 방식) 여긴 에러가 발생함]
file:///Users/0uizi0/Documents/STUDY/SeSAC/sesac-practice/mt/proxy.js:34
hong.fullName = "Lee";
              ^

TypeError: 'set' on proxy: trap returned falsish for property 'fullName'
    at file:///Users/0uizi0/Documents/STUDY/SeSAC/sesac-practice/mt/proxy.js:34:15
    at ModuleJob.run (node:internal/modules/esm/module_job:222:25)
    at async ModuleLoader.import (node:internal/modules/esm/loader:316:24)
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:123:5)

Node.js v20.14.0
[nodemon] app crashed - waiting for file changes before starting...
 */

export default class Emp {
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
        if (prop === "fullName") {
          if (prop !== "fullName") target[prop] = value;
          if (!value.includes(" ")) target.lastName = value.toUpperCase();
          else {
            const [f, l] = value.split(" ");
            target.firstName = f;
            target.lastName = l.toUpperCase();
          }
          return target;
        }
      },
    });
  }
}

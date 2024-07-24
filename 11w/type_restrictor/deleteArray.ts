import * as assert from "assert";

type TPropertyKeyType = string | number | symbol;
type TUser = { [key: string]: string | number };

function deleteArray(
  arr: TUser[] | number[],
  startOrKey: TPropertyKeyType,
  endOrValue?: unknown
) {
  if (typeof startOrKey === "number") {
    if (typeof endOrValue === "number") {
      return arr.filter((_, i) => i < startOrKey || i > endOrValue - 1);
    }
    return arr.slice(0, startOrKey);
  }

  if (typeof startOrKey === "string") {
    arr.filter((e) => {
      if (e && typeof e === "object") {
        // e['id'];  error
        // e[startOrKey];  error
      }
    });
  }

  // if (typeof startOrKey === 'symbol') {...}

  return [];
}

const arr = [1, 2, 3, 4];
assert.deepStrictEqual(deleteArray(arr, 2), [1, 2]);
assert.deepStrictEqual(deleteArray(arr, 1, 3), [1, 4]);

const Hong = { id: 1, name: "Hong" };
const Kim = { id: 2, name: "Kim" };
const Lee = { id: 3, name: "Lee" };
const users: TUser[] = [Hong, Kim, Lee];

assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users, "id", 2), [Hong, Lee]);

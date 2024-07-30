type TPropertyKeyType = string | number | symbol;
type TUser = { [key: string]: string | number };

function deleteArray<T>(
  arr: T[],
  startOrKey: number | keyof T,
  endOrValue?: number | T[keyof T]
) {
  if (typeof startOrKey === "number") {
    return arr.filter(
      (_, i) =>
        i < startOrKey ||
        i >
          (typeof endOrValue === "number"
            ? endOrValue - 1
            : Number.MAX_SAFE_INTEGER)
    );
  }

  return arr.filter(
    (a) => a && typeof a === "object" && a[startOrKey] !== endOrValue
  );
}

const arr = [1, 2, 3, 4];
console.log(deleteArray(arr, 2)); // [1, 2]
console.log(deleteArray(arr, 1, 3)); // [1, 4]
console.log(arr); // [1, 2, 3, 4]

const userss = [
  { id: 1, name: "Hong" },
  { id: 2, name: "Kim" },
  { id: 3, name: "Lee" },
];

console.log(deleteArray(userss, 2)); // [Hong, Kim]
console.log(deleteArray(userss, 1, 2)); // [Hong, Lee]
console.log(deleteArray(userss, "id", 2)); // [Hong, Lee]
console.log(deleteArray(userss, "name", "Lee")); // [Hong, Kim]

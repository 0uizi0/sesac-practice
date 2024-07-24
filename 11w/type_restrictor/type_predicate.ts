const isStringNumber = (value: unknown): value is [string, number] =>
  // <이 부분을 작성하시오>
  typeof value === "string" || typeof value === "number";

const f1 = (value: number | string | boolean | [string, number]) => {
  if (isStringNumber(value)) {
    console.log(value[0].toUpperCase(), value[1].toFixed());
  }
};

interface Animal {}
interface Dog extends Animal {
  name: string;
}
interface Cat extends Animal {
  punch(): void;
}
function isDog(a: Animal): a is Dog {
  // <이 부분을 작성하시오>
  return (a as Dog).name !== undefined;
}

const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input });

function* add() {
  const a = yield "첫 번째 수는?";
  const b = yield "두 번째 수는?";
  return a + b;
}

// 두 개의 수를 입력 받아 더하기를 수행하는 제너레이터를 작성하시오.
const itAdd = add();
console.log(itAdd.next().value);

rl.on("line", (answer) => {
  const { value, done } = itAdd.next(+answer);
  if (done) {
    console.log("Total:", value);
    rl.close();
  } else {
    console.log(value);
  }
}).on("close", () => {
  process.exit();
});

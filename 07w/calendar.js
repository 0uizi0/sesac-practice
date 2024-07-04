const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

function makeCalendar(sIdx, lastNum, date = 0) {
  let line = "";
  cal: for (let w = 0; w < 7; w += 1) {
    for (let wd = 0; wd < 7; wd += 1) {
      if (date > lastNum) break cal;
      line +=
        wd < sIdx && date <= 1
          ? "   "
          : `${date}${date.toString().length == 1 ? `  ` : ` `}`;
      date += 1;
    }
    line += "\n";
  }
  return line;
}

rl.question("날짜를 yyyy-mm-dd 형식으로 입력하시오 : ", (answer) => {
  const weeks = "일월화수목금토";
  const [y, m, _] = answer.split("-").map(Number);
  const firstDay = new Date(y, m - 1, 1);
  const lastDay = new Date(y, m, 0);

  console.log([...weeks].join(" "));
  console.log("-");

  const thisMonth = makeCalendar(firstDay.getDay(), lastDay.getDate());
  console.log(thisMonth);

  rl.close();
});

rl.on("close", function () {
  process.exit();
});

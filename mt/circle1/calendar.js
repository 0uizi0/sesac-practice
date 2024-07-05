const WEEKS = "일월화수목금토";

export default function cal(ym) {
  const [y, m] = ym.split("-").map(Number);
  const d = new Date(y, m, 1);
  d.setDate(0);
  const lastDate = d.getDate();
  d.setDate(1);
  const startDay = d.getDay();

  let ret = " ".repeat(startDay * 3);
  for (let i = 1; i <= lastDate; i += 1) {
    if (i % 7 == 0) ret += "\n";
    ret += i.toString().padStart(3, " ");
  }
  console.log(`${m}월 ${y}`.padStart(21 / 2 + 4));
  console.log([...WEEKS].map(w => w.padStart(2," ")).join(''))
  console.log(ret);
}

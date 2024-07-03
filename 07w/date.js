// 1970년 1월 1일과 1970년 1월 2일의 차이를 초로 나타내시오.
const diff = Date.parse("1970/01/02/00:00:00 UTC");
console.log(diff);

// 이 달의 날짜 5개를 무작위로 만들어 역순으로 정렬하시오.
const rand = (s, e) => s + Math.floor(Math.random() * (e - s + 1));

const dates = [];
const today = new Date();
const last = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
for (let i = 0; i < 5; i += 1) {
  dates.push(rand(1, last));
}
dates.sort((a, b) => b - a);
console.log(dates);

// 내년(2025년)의 오늘(6월 29일)의 요일을 출력하시오.
const weeks = "일월화수목금토";
const t = new Date();
const nextYear = new Date(t.getFullYear() + 1, t.getMonth(), t.getDate() + 1);
console.log(`${weeks[nextYear.getDay()]}요일`);

// 오늘(7월 3일)로 부터 100일 후의 날짜는?
const future = new Date(new Date().setDate(today.getDate() + 100));
console.log(future);

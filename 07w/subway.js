const SB_LINES = [
  "신도림",
  "대림",
  "구로디지털단지",
  "신대방",
  "신림",
  "봉천",
  "서울대입구",
  "낙성대",
  "사당",
  "방배",
  "서초",
  "교대",
  "강남",
  "역삼",
  "선릉",
  "삼성",
  "종합운동장",
  "잠실새내",
  "잠실",
  "잠실나루",
  "강변",
  "구의",
  "건대입구",
  "성수",
  "용답",
  "신답",
  "용두",
  "신설동",
  "뚝섬",
  "한양대",
  "왕십리",
  "상왕십리",
  "신당",
  "동대문역사문화공원",
  "을지로4가",
  "을지로3가",
  "을지로입구",
  "시청",
  "충정로",
  "아현",
  "이대",
  "신촌",
  "홍대입구",
  "합정",
  "당산",
  "영등포구청",
  "문래",
];

class Subway {
  SB_LINES;
  constructor(s, e) {
    this.s = s;
    this.e = e;
  }

  [Symbol.iterator]() {
    let sIdx = SB_LINES.indexOf(this.s);
    let eIdx = SB_LINES.indexOf(this.e);
    const lines =
      sIdx > eIdx
        ? [...SB_LINES.slice(sIdx), ...SB_LINES.slice(0, eIdx + 1)]
        : SB_LINES.slice(sIdx, eIdx + 1);
    let idx = 0;

    return {
      next() {
        return {
          value: lines[idx++],
          done: idx > lines.length,
        };
      },
    };
  }
}

const routes = new Subway("문래", "신림");
const it1 = routes[Symbol.iterator]();
console.log([...routes]); // [ '문래', '신도림', '대림', '구로디지털단지', '신대방', '신림' ]
console.log(it1.next()); // { value: '문래', done: false }
console.log(it1.next()); // { value: '신도림', done: false }
console.log(it1.next()); // { value: '대림', done: false }
console.log(it1.next()); // { value: '구로디지털단지', done: false }
console.log(it1.next()); // { value: '신대방', done: false }
console.log(it1.next()); // { value: '신림', done: false }
console.log(it1.next()); // { value: undefined, done: true }

const routes2 = new Subway("구로디지털단지", "성수"); // 22개 정거장
console.log([...routes2]); // ['구로디지털단지', '신대방', ..., '성수']
console.log("routes2 길이 >>", [...routes2].length); // 22
const it2 = routes2[Symbol.iterator]();
while (true) {
  const x = it2.next();
  console.log(x);
  if (x.done) break;
}

const routes3 = new Subway("문래", "합정"); // 45개 정거장이면 통과!
console.log("routes3 길이 >>", [...routes3].length); // 45

const routes4 = new Subway("신도림", "을지로입구"); // 37개 정거장이면 통과!
console.log("routes4 길이 >>", [...routes4].length); // 37

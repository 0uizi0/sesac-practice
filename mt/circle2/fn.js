// 전화번호 출력
/**
 * [규칙]
 * - A-B-C
 * -02로 시작하면 첫째 자리는 2개
 * - 12개 이상이면 첫째 자리는 str.length - 8
 * - B는 str.length - A - 4
 */
export function telfmt(str) {
  const len = str?.length;
  const A = str.startsWith("02") ? 2 : len >= 12 ? len - 8 : 3;
  const B = len - A - 4;
  const regexp = new RegExp(`(\\d{${A}})(\\d{${B}})(\\d{${4}})`);

  if (len <= 8) return str.replace(/(\d{1,4})(\d{4})/, "$1-$2");

  return str.replace(regexp, "$1-$2-$3");
}

// 초성 검색
const ㄱㄴㄷ = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
const 가나다 = "가까나다따라마바빠사싸아자짜차카타파하";
const 힣 = "힣".charCodeAt(0);
export function searchByKoreanInitialSound(arr, find) {
  const r = [...find].reduce((acc, a) => {
    const idx = ㄱㄴㄷ.search(a);
    if (idx === -1) return a;

    const S = 가나다[idx];
    const E = (가나다[idx + 1]?.charCodeAt(0) || 힣 + 1) - 1;
    return `${acc}[${S}-${String.fromCharCode(E)}]`;
  }, "");
  const regexp = new RegExp(r);
  return arr.filter((a) => regexp.test(a));
}

// debounce : delay 동안 호출된건 무시됨
export function debounce(cb, delay) {
  let timer;
  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
      timer = null;
    }, delay);
  };
}
// throttle: delay동안 호출된 건 마지막 호출 기준으로 delay 시작
export function throttle(cb, delay) {
  let timer;
  return () => {
    if (timer) return;

    timer = setTimeout(() => {
      cb();
      timer = null;
    }, delay);
  };
}

// 캘린더
const WEEKS = "일월화수목금토";
export function cal(ym) {
  const [y, m] = ym.split("-").map(Number);
  const d = new Date(y, m, 1);
  d.setDate(0);
  const lastDate = d.getDate();
  d.setDate(1);
  const startDate = d.getDay();

  let ret = " ".padStart(3 * startDate, " ");
  for (let i = 1; i <= lastDate; i += 1) {
    if (i % 7 === 0) ret += "\n";
    ret += i.toString().padStart(3, " ");
  }
  console.log(`${m}월 ${y}`.padStart(21 / 2 + 4, " "));
  console.log([...WEEKS].map((w) => w.padStart(2, " ")).join(""));
  console.log(ret);
}

// keyPair
export function keyPair(arr, n) {
  const val_idx = {}; // {val : idx}
  for (let i = 0; i < arr.length; i += 1) {
    const v = arr[i];
    if (val_idx[v]) return [val_idx[v], i];
    val_idx[n - v] ??= i;
  }
}

// reduce
export function reduce(arr, fn, initValue) {
  let i = 0;
  let acc = initValue ?? ((i = 1), arr[0]);
  while (i < arr.length) {
    acc = fn(acc, arr[i++]);
  }
  return acc;
}

// neverOverFlow
export function neverOverFlow(num) {
  let stopN = 0;
  let ret = add(num);
  if (stopN !== 0) ret += add(stopN);
  function add(n) {
    try {
      stopN = 0;
      return n <= 1 ? n : n + add(n - 1);
    } catch (err) {
      stopN = n;
      return 0;
    }
  }
}

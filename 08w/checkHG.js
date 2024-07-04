assert = require("assert");

// 문자열이 한글 자음으로 끝나는지 체크하는 함수를 작성하시오
const isAlpha = (w) => /[A-Za-z]/.test(w);
const isNum = (w) => /[0-9]/.test(w);
const isHangeulMoem = (w) => /[ㅏ-ㅣ]/.test(w);

function isEndJaum(w) {
  const lw = w.slice(-1);

  if (isHangeulMoem(lw)) return false;
  if (isAlpha(lw)) {
    return ["L", "l", "M", "m", "N", "n", "R", "r"].includes(lw) ? true : false;
  }
  if (isNum(lw)) {
    return ["1", "3", "6", "7", "8", "0"].includes(lw) ? true : false;
  }

  return (lw.charCodeAt(0) - "가".charCodeAt(0)) % 28 !== 0;
}

assert.equal(isEndJaum("아지오"), false);
assert.equal(isEndJaum("북한강"), true);
assert.equal(isEndJaum("뷁"), true);
assert.equal(isEndJaum("강원도"), false);
assert.equal(isEndJaum("바라당"), true);
assert.equal(isEndJaum("ㅜㅜ"), false);
assert.equal(isEndJaum("케잌"), true);
assert.equal(isEndJaum("점수 A"), false);
assert.equal(isEndJaum("알파벳L"), true);
assert.equal(isEndJaum("24"), false);
assert.equal(isEndJaum("23"), true);

// 조사 '이/가, 을/를, 은/는'를 알아서 붙이는 함수를 작성하시오.
const iga = (w) => (isEndJaum(w) ? "이" : "가");
const eunun = (w) => (isEndJaum(w) ? "은" : "는");
const eulul = (w) => (isEndJaum(w) ? "을" : "를");

assert.equal(`고성군${iga("고성군")}`, "고성군이");
assert.equal(`강원도${iga("강원도")}`, "강원도가");

assert.equal(`고성군${eunun("고성군")}`, "고성군은");
assert.equal(`강원도${eunun("강원도")}`, "강원도는");

assert.equal(`고성군${eulul("고성군")}`, "고성군을");
assert.equal(`강원도${eulul("강원도")}`, "강원도를");

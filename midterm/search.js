// 초성 검색을 하는 search 함수를 정규식을 이용하여 작성하시오.
assert = require("assert");

s = [
  "강원도 고성군",
  "고성군 토성면",
  "토성면 북면",
  "북면",
  "김1수",
  "동광초등학교",
];

const ㄱㄴㄷ = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ";
const 가나다 = "가까나다따라마바빠사싸아자짜차카타파하";
const 힣 = "힣".charCodeAt(0);

function searchByKoreanInitialSound(data, first = "") {
  const r = [...first].reduce((acc, a) => {
    const idx = ㄱㄴㄷ.search(a);

    if (idx === -1) return a;
    const S = 가나다[idx];
    const E = (가나다[idx + 1]?.charCodeAt(0) || 힣 + 1) - 1;

    return `${acc}[${S}-${String.fromCharCode(E)}]`;
  }, "");
  const regexp = new RegExp(r);
  return data.filter((a) => regexp.test(a));
}

assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱㅇ"), [
  "강원도 고성군",
]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱㅅㄱ"), [
  "강원도 고성군",
  "고성군 토성면",
]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅌㅅㅁ"), [
  "고성군 토성면",
  "토성면 북면",
]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅂㅁ"), [
  "토성면 북면",
  "북면",
]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅍㅁ"), []);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㄱ1ㅅ"), ["김1수"]);
assert.deepStrictEqual(searchByKoreanInitialSound(s, "ㅎㄱ"), ["동광초등학교"]);

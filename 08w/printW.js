assert = require("assert");

// 문자열 str에서 대문자만 골라 소문자로 변환하세요.
function upperToLower(w) {
  const setStrFormat = (match) => "*" + match.toLowerCase() + "*-";
  return w.replace(/[A-Z]/g, setStrFormat);
}

/** 풀이 */
function upperToLowerSH(str) {
  return str.replace(/[A-Z]/g, (matched) => `*${matched.toLowerCase()}*-`);
}

assert.strictEqual(
  upperToLower("Senior Coding Learning JS"),
  "*s*-enior *c*-oding *l*-earning *j*-*s*-"
);

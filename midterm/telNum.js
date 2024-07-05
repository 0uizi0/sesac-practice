// 전화번호를 정확한 형식으로 출력하는 함수를 작성하시오.
assert = require("assert");

/**
 * [전략 세우기]
 * - (A - B - C)
 * - 8자리 이하일 때는 존재하지 않음
 * - 02로 시작하면 앞이 2개임
 * - 12자 이상이면,, length - 8하면 앞의 개수를 구할 수 있음
 * - 끝자리는 무조건 4개로 정해져있음
 * - 가운데 자리는 전체자리에서 앞자리 + 뒷자리 뺀 개수임
 */

function telfmt(tel) {
  const len = tel?.length ?? 0;

  if (len <= 8) return tel?.replace(/(\d{1,4})(\d{4})/, "$1-$2");

  const A = tel.startsWith("02") ? 2 : len >= 12 ? len - 8 : 3;
  const B = len - (A + 4);

  const regext = new RegExp(`(\\d{${A}})(\\d{${B}})(\\d{4})`);
  return tel.replace(regext, "$1-$2-$3");
}

assert.deepStrictEqual(telfmt("0101234567"), "010-123-4567");
assert.deepStrictEqual(telfmt("01012345678"), "010-1234-5678");
assert.deepStrictEqual(telfmt("0212345678"), "02-1234-5678");
assert.deepStrictEqual(telfmt("021234567"), "02-123-4567");
assert.deepStrictEqual(telfmt("0331234567"), "033-123-4567");
assert.deepStrictEqual(telfmt("15771577"), "1577-1577");
assert.deepStrictEqual(telfmt("07012341234"), "070-1234-1234");
assert.deepStrictEqual(telfmt("050712345678"), "0507-1234-5678");

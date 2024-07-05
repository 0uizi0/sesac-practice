/**
 * [규칙 파악]
 * - A-B-C
 * - A가 02로 시작하면 A 개수는 무조건 2
 * - C의 길이는 무조건 4
 * - str의 길이가 12개 이상 => A의 길이는 str.length - 8
 * - B의 길이는 str.length - (A+B)
 */

export default function telfmt(tel) {
  const len = tel?.length;
  const A = tel.startsWith("02") ? 2 : len >= 12 ? len - 8 : 3;
  const B = len - A - 4;

  if (len <= 8) return tel.replace(/(\d{1,4})(\d{4})/,"$1-$2")

  const regexp = new RegExp(`(\\d{${A}})(\\d{${B}})(\\d{${4}})`)
  return tel.replace(regexp, "$1-$2-$3");
}

// 다음과 같이 올바른 더하기 연산을 하는 addPoints 함수를 작성하시오. (단, 소숫점 자리수는 긴쪽에 맞춘다)
const addPoints = (a, b) => {
  const maxLength = Math.max(a.toString().length, b.toString().length);
  return Number((a + b).toFixed(maxLength - 2));
};

console.log(addPoints(0.21354, 0.1)); // 0.31354
console.log(addPoints(0.14, 0.28)); // 0.42
console.log(addPoints(0.34, 0.226)); // 0.566

/** 코드 리뷰
 * - 인자로 number 타입을 받았기 때문에, number 타입으로 리턴해야 함
 */

/**
 * 1 ~ n까지의 원소로 이루어진 배열을 만드는 함수를 [재귀함수]로 작성하라
 * 단, array 메소드 사용 금지, destructuring 사용하기
 */

const makeArray = (n, array = []) => {
  if (n === 0) return array;
  return makeArray(n - 1, [n, ...array]);
};

const makeReverseArray = (n, array = []) => {
  if (n === 0) return array;
  return makeReverseArray(n - 1, [...array, n]);
};

console.log(makeArray(10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(makeReverseArray(5)); // [ 5, 4, 3, 2, 1 ]

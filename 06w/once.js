(function once(f) {
  let called = false;
  return (...args) => {
    if (!called) {
      called = true;
      return f(...args);
    }
  };
})();

// 실행이 되지 않아 의아했던 방법 (즉시호출함수 - counter 함수 참고)
const once1 = ((f) => {
  let called = false;
  return (...args) => {
    if (!called) {
      called = true;
      return f(...args);
    }
  };
})();

// 이것저것 시도해보다가 통과한 코드 (이유 모름)
const once2 = (f) =>
  (
    (called = false) =>
    (...args) => {
      if (!called) {
        called = true;
        return f(...args);
      }
    }
  )();

const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn(2, 7)); // undefined
console.log(fn(3, 8)); // undefined

// const fn1 = once1((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
// // => TypeError: f is not a function (string으로 반환됨) => ERROR
// console.log(fn1(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
// console.log(fn1(2, 7)); // undefined
// console.log(fn1(3, 8)); // undefined

const fn2 = once2((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
console.log(fn2(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
console.log(fn2(2, 7)); // undefined
console.log(fn2(3, 8)); // undefined

// --> 둘의 차이가 뭐길래 결과가 다르게 나오는지 잘 모르겠음...

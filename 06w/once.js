// const once1 = (f) =>
//   (() => {
//     let called = false;
//     return (...args) => {
//       if (!called) {
//         called = true;
//         return f(...args);
//       }
//     };
//   })(f);

// const fn = once1((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);
// console.log(fn(1, 6)); // 금일 운행금지 차량은 끝번호 1, 6입니다!
// console.log(fn(2, 7)); // undefined
// console.log(fn(3, 8)); // undefined

// TODO: 매 n초 후 다시 한번 실행할 수 있도록 개선하기
// (test 요령: 0.1초 한 번씩 실행하게 해놓고, 1초 후에 초기화)

/** 문제 의도에 맞는 풀이 코드 */
function once(func) {
  let exectued = false;
  return function (n1, n2) {
    if (exectued) return undefined;
    exectued = true;
    setTimeout(() => {
      exectued = false;
    }, 1000);
    return func(n1, n2);
  };
}

const fn = once((x, y) => `금일 운행금지 차량은 끝번호 ${x}, ${y}입니다!`);

/******** test ********/
let timer = 0;

const test = setInterval(() => {
  console.log(
    fn(Math.floor(Math.random() * 9 + 1), Math.floor(Math.random() * 9 + 1))
  );
  if ((timer += 100) === 4000) clearInterval(test);
}, 100);
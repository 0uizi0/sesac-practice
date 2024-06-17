/** 피보나치 수열
 * - f(n) = f(n-2) + f(n-1) (단, n <= 1 일 때 f(n) = n)
 * - 즉, 0 ~ 9 까지의 값은 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
 */

// 1. loop를 이용하여 구현
const fibonacci = (n) => {
  const arr = [];
  for (let i = 0; i <= n; i += 1) {
    if (i <= 1) {
      arr.push(i);
    } else {
      arr.push(arr[i - 2] + arr[i - 1]);
    }
  }
  return arr[n];
};

console.log(fibonacci(5)); // 5
console.log(fibonacci(7)); // 13
console.log(fibonacci(30)); // 832040

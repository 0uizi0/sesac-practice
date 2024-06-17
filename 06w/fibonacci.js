/** 피보나치 수열
 * - f(n) = f(n-2) + f(n-1) (단, n <= 1 일 때 f(n) = n)
 * - 즉, 0 ~ 9 까지의 값은 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
 */

// 1. loop를 이용하여 구현
const loopFibonacci = (n) => {
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

console.log(loopFibonacci(5)); // 5
console.log(loopFibonacci(7)); // 13
console.log(loopFibonacci(30)); // 832040

// 2. 순수 재귀를 이용하여 구현
const arr = [];
const recurFibonacci = (n) => {
  if (n <= 1) return n;
  return arr[n] || (arr[n] = recurFibonacci(n - 2) + recurFibonacci(n - 1));
};

console.log("------------ 순수 재귀를 이용 ----------------");
console.log(recurFibonacci(5)); // 5
console.log(recurFibonacci(7)); // 13
console.log(recurFibonacci(30)); // 832040

// 3. memoization하여 구현
const memoized = (fn) => {
  const memoizedTable = {};
  return (k) => memoizedTable[k] || (memoizedTable[k] = fn(k));
};

const memoizedFibonacci = memoized((n) => {
  if (n <= 1) return n;
  return memoizedFibonacci(n - 2) + memoizedFibonacci(n - 1);
});

console.log("------------ memoization하여 구현 ----------------");
console.log(memoizedFibonacci(5)); // 5
console.log(memoizedFibonacci(7)); // 13
console.log(memoizedFibonacci(30)); // 832040

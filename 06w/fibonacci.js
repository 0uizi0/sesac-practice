/** 피보나치 수열
 * - f(n) = f(n-2) + f(n-1) (단, n <= 1 일 때 f(n) = n)
 * - 즉, 0 ~ 9 까지의 값은 [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
 */

// 1. loop를 이용하여 구현
const loopFibonacci = (n) => {
  const arr = [];
  for (let i = 0; i <= n; i += 1) {
    arr[i] = i <= 1 ? i : arr[i - 2] + arr[i - 1];
  }
  return arr[n];
};

// 2. 순수 재귀를 이용하여 구현
const arr = [];
const recurFibonacci = (n) => {
  if (n <= 1) return n;
  return arr[n] || (arr[n] = recurFibonacci(n - 2) + recurFibonacci(n - 1));
};

// 3. memoization하여 구현
const memoized = (fn) => {
  const memoizedTable = {};
  return (k) => memoizedTable[k] || (memoizedTable[k] = fn(k));
};

const memoizedFibonacci = memoized((n) => {
  if (n <= 1) return n;
  return memoizedFibonacci(n - 2) + memoizedFibonacci(n - 1);
});

// --- 이하 테스트용 코드 --
const TestBed = [5, 7, 30];
function test(fn) {
  const fname = fn.name || "memoizedFibonacci";
  for (const t of TestBed) {
    console.log(`${fname}(${t}) =`, fn(t));
  }
  console.log("----------------------------------");
}

test(loopFibonacci);
test(recurFibonacci);
test(memoizedFibonacci);

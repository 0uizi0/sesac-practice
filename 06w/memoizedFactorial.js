const memoized = (fn) => {
  const memoizedTable = {};
  return (k) => memoizedTable[k] || (memoizedTable[k] = fn(k));
};

// let memoizedFactorialRunCnt = 0;

const memoizedFactorial = memoized((n) => {
  // memoizedFactorialRunCnt += 1;
  if (n === 1) return 1;
  return n * memoizedFactorial(n - 1);
});

console.log(memoizedFactorial(3)); // 6
// console.log(`runCnt = ${memoizedFactorialRunCnt}`); // runCnt = 3
// memoizedFactorialRunCnt = 0;
console.log(memoizedFactorial(5)); // 120
// console.log(`runCnt = ${memoizedFactorialRunCnt}`); // runCnt = 2

const memoized = (fn) => {
  const memoizedTable = {};
  return (n) => memoizedTable[n] || (memoizedTable[n] = fn(n));
};

const memoizedFactorial = memoized((n) => {
  if (n <= 1) return 1;
  return n * memoizedFactorial(n - 1);
});

console.log(memoizedFactorial(3));

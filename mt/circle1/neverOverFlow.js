export default function neverOverFlow(num) {
  let stopN = 0;
  let ret = add(num);
  if (stopN !== 0) ret += add(stopN);
  function add(n) {
    try {
      stopN = 0;
      return n <= 1 ? n : n + add(n - 1);
    } catch (err) {
      stopN = n;
      return 0;
    }
  }
  return ret;
}

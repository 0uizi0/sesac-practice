export default function reduce(arr, fn, initValue) {
  let i = 0;
  let acc = initValue ?? ((i = 1), arr[0]);
  while (i < arr.length) {
    acc = fn(acc, arr[i++]);
  }
  return acc;
}

const testCase = [
  ["A", 10, 20],
  ["B", 30, 40],
  ["C", 50, 60, 70],
];

const makeObjectFromArray = (arr) => {
  const obj = {};
  // 불필요한 코드 지양, 디스트럭쳐링 잘 사용해야 함
  for (let [k, ...v] of arr) {
    obj[k] = v;
  }
  return obj;
};
const convertedObj = makeObjectFromArray(testCase);
console.log("🚀 객체로 변환된 결과 :", convertedObj); // { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }

// obj => arr
const makeArrayFromObject = (obj) => {
  const arr = [];
  for (const [k, v] of Object.entries(obj)) {
    arr.push([k, ...v]);
  }
  return arr;
};
const convertedArr = makeArrayFromObject(convertedObj);
console.log("🚀 배열로 변환된 결과 :", convertedArr); // [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]]

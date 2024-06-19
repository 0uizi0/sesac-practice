// 얕은 복사 : 복사한 변수가 원본 변수의 참조와 동일한 참조(동일한 값)을 가지는 복사 방법. 원본이나 복사본 중 하나를 변경하면 다른 값도 변경됨
// 깊은 복사 : 복사한 변수가 원본 변수의 참조와 다른 참조값을 가지는 복사 방법. 원본이나 복사본은 서로 영향을 주지 않음

// BUT - 문제에서 다루는 복사는
// 얕은 복사 : 한 단계 까지만 복사 => 중첩된 객체는 참조값을 복사함
// 깊은 복사 : 객체에 중첩되어 있는 객체까지 모두 복사
const shallowCopy = (obj) => {
  const newObj = {};
  for (let k in obj) {
    newObj[k] = obj[k];
  }
  return newObj;
};

// 방법 1. JSON.parse(JSON.stringify()) 활용
const deepCopy = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

// 방법 2. structuredClone() 활용
const deepCopy2 = (obj) => {
  return structuredClone(obj);
};

const testCase = { name: "KEJ", age: 24, addr: { id: 1, city: "Seoul" } };

// 얕은 복사 테스트
const copy1 = shallowCopy(testCase);
copy1.age = 25;
copy1.addr.city = "Busan";
console.log("🚀 얕은 복사 - 한 단계 복사 확인 :", testCase.age !== copy1.age); // true
console.log(
  "🚀 얕은 복사 - 두 단계 복사 확인 :",
  testCase.addr.city !== copy1.addr.city
); // false

// 깊은 복사 테스트
const copy2 = deepCopy(testCase);
copy2.age = 26;
copy2.addr.city = "Daegu";
console.log("🚀 깊은 복사 - 한 단계 복사 확인 :", testCase.age !== copy2.age); // true
console.log(
  "🚀 깊은 복사 - 두 단계 복사 확인 :",
  testCase.addr.city !== copy2.addr.city
); // false

const copy3 = deepCopy2(testCase);
copy3.age = 26;
copy3.addr.city = "Daegu";
console.log("🚀 깊은 복사 - 한 단계 복사 확인 :", testCase.age !== copy3.age); // true
console.log(
  "🚀 깊은 복사 - 두 단계 복사 확인 :",
  testCase.addr.city !== copy3.addr.city
); // false

const arr = [100, 200, 300, 400, 500, 600, 700];

// 1. for-in문을 사용하여 배열의 인덱스(키)를 출력하시오
const kOfArr = [];
for (let k in arr) {
  kOfArr.push(k);
}
console.log("🚀 배열의 인덱스(키):", kOfArr);

// 2. for-in문을 사용하여 배열의 원소 값을 출력하시오
const vOfArr = [];
for (let k in arr) {
  vOfArr.push(arr[k]);
}
console.log("🚀 배열의 원소 값:", vOfArr);

const obj = { name: "lim", addr: "Yongsan", level: 1, role: 9, receive: false };
// 3. for-in문을 사용하여 프로퍼티 이름(키)을 출력하시오
const kOfObj = [];
for (let k in obj) {
  kOfObj.push(k);
}
console.log("🚀 객체의 인덱스(키):", kOfObj);

// 4. for-in문을 사용하여 프로퍼티 값을 출력하시오.
const vOfObj1 = [];
for (let k in obj) {
  vOfObj1.push(obj[k]);
}
console.log("🚀 for-in 사용한 객체의 원소 값:", vOfObj1);

// 5. for-of문을 사용하여 프로퍼티 값을 출력하시오.
const vOfObj2 = [];
for (let v of Object.values(obj)) {
  vOfObj2.push(v);
}
console.log("🚀 for-of 사용한 객체의 원소 값:", vOfObj2);

// 6. level 프로퍼티가 열거(entries)되지 않도록 설정하시오. // Object.defineProperty
Object.defineProperty(obj, "level", { enumerable: false });
console.log("🚀 level 프로퍼티 확인 :", obj);

// 7. role 프로퍼티는 읽기 전용으로 설정하시오. // Object.defineProperty
Object.defineProperty(obj, "role", { writable: false });
obj.role = "test";
console.log("🚀 role 프로퍼티 변경 확인 :", obj);
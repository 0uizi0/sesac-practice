const shallowCopy = (obj) => {
  const newObj = {};
  for (let k in obj) {
    newObj[k] = obj[k];
  }
  return newObj;
};

const testCase = {
  name: "KEJ",
  age: 24,
  addr: { id: 1, city: "Seoul", test: { a: "a", b: "b", c: "c" } },
  pets: ["navi", "siru", "dang-dang", ["try1", "try2"]],
  test: 1,
};

// 재귀를 활용해 v의 타입 중 object가 존재하면 => 재귀 / 더 이상 존재하지 않고 프리미티브한 값만 존재하면 => 객체 리턴
const deepCopy = (obj) => {
  const newObj = {};
  for (let k of Object.keys(obj)) {
    const v = obj[k];

    if (typeof v == "object") {
      if (!Array.isArray(v)) {
        newObj[k] = deepCopy(v);
      } else {
        // TODO: 배열 1 depth만 됨
        // TODO: 배열, 객체 검사 ==> 함수로 빼낼 수 있음
        newObj[k] = v.slice();
      }
      continue;
    }
    newObj[k] = v;
  }
  return newObj;
};

const copy = deepCopy(testCsase);
console.log(testCase);
console.log(copy);

copy.addr.city = "Busan";
copy.pets[3][1] = "maru";
console.log("------------- 변경 유무 확인 ------------");
console.log(testCase);
console.log(copy);

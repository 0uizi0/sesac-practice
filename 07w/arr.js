const arr2 = [1, 2, 3, 4, 5];
// ex1) [2,3]을 추출
console.log("🚀 ~ ex1:", arr2.slice(1, 3));

// ex2) [3]부터 모두 다 추출
console.log("🚀 ~ ex2:", arr2.slice(3));

// ex3) [2,3,4] 제거하기
const ex3 = arr2.splice(1, 3);
console.log("🚀 ~ ex3:", arr2.splice(1, 3));
console.log("🚀 ~ arr2:", arr2);

// ex4) 복원하기
console.log("🚀 ~ ex4:", arr2.splice(1, 0, 2, 3, 4));
console.log("🚀 ~ arr2:", arr2);

// ex5) [3] 부터 끝까지 제거하기
console.log("🚀 ~ ex5:", arr2.splice(3));
console.log("🚀 ~ arr2:", arr2);

// ex6) 복원하기
console.log("🚀 ~ ex6:", arr2.splice(3, 0, 4, 5));
console.log("🚀 ~ arr2:", arr2);

// ex7) [1,2, 'X', 'Y', 'Z', 4, 5] 만들기
console.log("🚀 ~ ex7:", arr2.splice(2, 1, "X", "Y", "Z"));
console.log("🚀 ~ arr2:", arr2);

console.log("🚀 복원:", arr2.splice(2, 3, 3));
console.log("🚀 ~ arr2:", arr2);

// ex8) 위 7번 문제를 splice를 사용하지 말고 작성하시오.
const xyz = ["X", "Y", "Z"];
const r8 = [arr2[0], arr2[1], "X", "Y", "Z", arr2[3], arr2[3]];
console.log("🚀 ~ r8:", r8);

const r81 = [...arr2.slice(0, 2), ...xyz, ...arr2.slice(3)];
console.log("🚀 ~ r81:", r81);

const r82 = arr2
  .map((v, i) => {
    if (i === 2) return xyz;
    else return v;
  })
  .flat();
console.log("🚀 ~ r82:", r82);

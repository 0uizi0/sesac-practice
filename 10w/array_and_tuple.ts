// 고객이 주문한 상품의 총 금액을 요금표를 참고하여 계산하려고 한다. 에러가 발생하는 이유와 해결 방법을 고민해보자.
// "사이즈에 M이 아니라 MM으로 사이즈를 잘 못 기입했을 경우 TS 오류가 나면 통과"

// 기존 코드
const SIZE_ORG = [
  { id: "XS", price: 8000 },
  { id: "S", price: 10000 },
  { id: "M", price: 12000 },
  { id: "L", price: 14000 },
  { id: "XL", price: 15000 },
];
const sizeOption = { XS: 1, S: 5, M: 2, L: 2, XL: 4 };
const totalPrice = SIZE_ORG.reduce(
  (currPrice, size) => currPrice + sizeOption[size.id] * size.price,
  0
);

/**
 * 에러 발생 원인 )
 * sizeOption 객체의 key에 SIZE 배열의 id 값("XS", "S", "M", "L", "XL")이 아닌 값이 들어올 가능성이 존재하기 때문
 */

/**
 * 에러 해결 방법 )
 * 1. TSize라는 타입을 생성한 후, id 속성에 리터럴 타입을 할당한다.
 * 2. 이후, SIZE 변수에 TSize 배열 타입을 할당한다.
 * => sizeOption2의 경우 리터럴 타입으로 할당되지 않은 'MM' 때문에 에러가 발생한다.
 */

// 에러 해결 코드
type TSize = {
  id: "XS" | "S" | "M" | "L" | "XL";
  price: number;
};

const SIZE: TSize[] = [
  { id: "XS", price: 8000 },
  { id: "S", price: 10000 },
  { id: "M", price: 12000 },
  { id: "L", price: 14000 },
  { id: "XL", price: 15000 },
];

const sizeOption1 = { XS: 1, S: 5, M: 2, L: 2, XL: 4 };
const totalPrice1 = SIZE.reduce(
  (currPrice, size) => currPrice + sizeOption1[size.id] * size.price,
  0
);
const sizeOption2 = { XS: 2, S: 3, MM: 4, L: 5, XL: 6 };
const totalPrice2 = SIZE.reduce(
  (currPrice, size) => currPrice + sizeOption2[size.id] * size.price,
  0
);

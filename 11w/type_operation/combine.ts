// 두 타입을 합치는 Combine 유틸리티 타입 만들기
interface IUser {
  id: number;
  age: number;
  name: string;
}

interface IDept {
  id: number;
  age: string;
  dname: string;
  captain: string;
}

type Combine<T, U> = {
  [K in keyof (T & U)]: K extends keyof T & keyof U ? T[K] | U[K] : (T & U)[];
};

type ICombined = Combine<IUser, IDept>;

// 특정 key의 타입을 변경하는 Change 유틸리티 타입 만들기
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

type Change<T, K extends keyof T, U> = {
  [x in K]: U;
};
type DeptCaptain = Change<IDept, "captain", IUser>;
// type Err = Change<IDept, "somekey", IUser>; // Error!!!

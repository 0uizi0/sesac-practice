// 다음을 interface로 어떻게 정의할까??
// type Ud2 = (TUser | TDept) & {addr: string};

interface User {
  id: number;
  name: string;
}

interface Dept {
  id: number;
  dname: string;
  captain: string;
}

/** 방법 1. 인덱스 시그니처 활용 */
interface Ud2 {
  id: number;
  [key: string]: string | number;
}

/** 방법 2. 선택적 속성 활용 */
interface Ud22 {
  addr: string;
  id: number;
  name?: string;
  dname?: string;
  captain?: string;
}

// 다음 코드가 오류가 없으면 통과!
const ud2: Ud2 = { id: 1, name: "HH", addr: "Seoul" };
const ud3: Ud2 = { id: 1, dname: "HH", captain: "HH", addr: "Seoul" };

const ud22: Ud22 = { id: 1, name: "HH", addr: "Seoul" };
const ud33: Ud22 = { id: 1, dname: "HH", captain: "HH", addr: "Seoul" };

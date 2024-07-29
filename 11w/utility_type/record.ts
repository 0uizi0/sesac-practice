// ex2) 다음 객체들을 하나로 합쳐(extend) 보세요.
type FullUser = Record<string, string | number>;

let users: FullUser[] = [
  { name: "Hong" },
  { age: 23 },
  { id: 1, addr: "Seoul" },
];

const ret = users.reduce((acc, user) => ({ ...acc, ...user }));

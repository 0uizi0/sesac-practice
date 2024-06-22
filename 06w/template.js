const before = () => console.log("before....");
const after = () => console.log("after...");

const someFn = (name, greeting) => console.log(`${greeting}, ${name}`);
const someFn2 = (id, nickname, email, level) =>
  console.log(`${id}/${nickname}/${email}/${level}`);

const template =
  (fn) =>
  (...args) => {
    before();
    fn(...args);
    after();
  };

const temp = template(someFn); // before → someFn → after 실행
const temp2 = template(someFn2); // before → someFn2 → after 실행

temp("sico", "hello");
console.log("------------------------------");
temp2(1, "lnsol", "sico@gmail.com", 5);

// => 타이머 함수를 사용하는 것이 문제 의도 같은데, 이벤트루프를 돌면서 함수가 담기는 실행 순서는 계속 바뀜 (알 수 없음)
// => 오히려 타이머 함수를 사용하지 않을 때 정상적으로 작동..?
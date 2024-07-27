// debounce와 throttle 함수를 TypeScript로 작성하시오.
function debounce(cb: (prop: number) => void, delay: number) {
  let timer: NodeJS.Timeout | null;

  return (props: Parameters<typeof cb>[0]) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(props);
      timer = null;
    }, delay);
  };
}

function throttle(cb: (prop: number) => void, delay: number) {
  let timer: NodeJS.Timeout | null;

  return (props: Parameters<typeof cb>[0]) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(props);
      timer = null;
    }, delay);
  };
}

// test
const debo = debounce((a) => console.log(a + 1), 1000);
for (let i = 10; i < 15; i++) debo(i); // 15

const thro = throttle((a) => console.log(a + 1), 1000);
for (let i = 10; i < 15; i++) thro(i); // 11

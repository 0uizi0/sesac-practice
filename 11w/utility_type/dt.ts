// debounce와 throttle 함수를 TypeScript로 작성하시오.
function debounce<F extends (...args: any[]) => any>(cb: F, delay: number) {
  let timer: NodeJS.Timeout | null;

  return (...args: Parameters<F>) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  };
}

function throttle<F extends (...args: any[]) => any>(cb: F, delay: number) {
  let timer: NodeJS.Timeout | null;

  return (...args: Parameters<typeof cb>) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  };
}

// test
const debo = debounce((a) => console.log(a + 1), 1000);
for (let i = 10; i < 15; i++) debo(i); // 15

const thro = throttle((a) => console.log(a + 1), 1000);
for (let i = 10; i < 15; i++) thro(i); // 11

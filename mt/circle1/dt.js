// 디바운스 : delay 기간 동안 발생된 호출은 무시됨
export function debounce(cb, delay) {
  let timer;
  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
      timer = null;
    }, delay);
  };
}

// 쓰로틀링 : delay 기간 동안 발생된 호출 중 가장 마지막 호출을 기준으로 delay 시작
export function throttle(cb, delay) {
  let timer;
  return () => {
    if (timer) return;
    timer = setTimeout(() => {
      cb();
      timer = null;
    }, delay);
  };
}

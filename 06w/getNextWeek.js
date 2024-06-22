const weeks = ["일", "월", "화", "수", "목", "금", "토"];

const getNextWeek = (() => {
  let widx = -1;
  if (widx >= weeks.length) {
    widx = 0;
  }
  return () => weeks[++widx];
})();

let cnt = 0;
const intl = setInterval(() => {
  // widx += 2; // side-effect!
  console.log("call", cnt, getNextWeek());
  if ((cnt += 1) === 7) clearInterval(intl);
}, 1000);

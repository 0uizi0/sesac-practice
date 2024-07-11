assert = require("assert");

/** promiseAll 함수 직접 구현 */
const promiseAll = (arr) => {
  return new Promise((resolve, reject) => {
    const ret = [];
    let leftCnt = arr.length;

    arr.forEach((a, i) => {
      a.then((res) => {
        ret[i] = res;
        if (!(--leftCnt)) resolve(ret);
      }).catch((err) => {
        reject(err);
      });
    });
  });
};

// TEST
const vals = [1, 2, 3];
const randTime = (val) =>
  new Promise((resolve) => setTimeout(resolve, Math.random() * 1000, val));

promiseAll([randTime(1), randTime(2), randTime(3)])
  .then((arr) => {
    console.table(arr);
    assert.deepStrictEqual(arr, vals);
  })
  .catch(console.error);

promiseAll([randTime(11), Promise.reject("RRR"), randTime(33)])
  .then((array) => {
    console.log("여긴 과연 호출될까?!");
  })
  .catch((error) => {
    console.log("reject!!!!!!>>", error);
  });

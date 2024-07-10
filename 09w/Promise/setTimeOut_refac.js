/** setTimeOut 코드를 Promise를 이용하여 refactoring */
const depthTimer = (id) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`depth${id}`, new Date());
      if (id < 3) resolve(id + 1);
      else reject(new Error(`Already ${id}-depth!!`));
    }, 1000 * id);
  });

// TEST
console.log("START!", new Date());
depthTimer(1)
  .then(depthTimer)
  .then(depthTimer)
  .catch((err) => console.log(err));

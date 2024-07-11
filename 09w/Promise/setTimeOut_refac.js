/** setTimeOut 코드를 Promise를 이용하여 refactoring */
const depthTimer = (id) =>
  new Promise((resolve, reject) => {
    console.log(`depth${id}`, new Date());
    if (id >= 3) reject(new Error(`Already ${id}-depth!!`));
    setTimeout(resolve, 1000 * id, (id += 1));
  });

// TEST
console.log("START!", new Date());
depthTimer(1)
  .then(depthTimer)
  .then(depthTimer)
  .catch((err) => console.log(err));

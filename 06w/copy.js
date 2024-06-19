const shallowCopy = (obj) => {
  const newObj = {};
  for (let k in obj) {
    newObj.k = obj[k];
  }
  return newObj;
};

const kim = { nid: 3, nm: "Hong", addr: "Pusan" };
const newKim = shallowCopy(kim);
newKim.addr = "Daegu";
console.log(kim.addr !== newKim.addr); // true ( => SUCCESS)

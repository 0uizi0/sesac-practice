function fmt(txts, num, cnt = 1) {
  let ret = [];
  const org = num.toString();
  for (let i = org.length - 1; i >= 0; i -= 1) {
    ret.unshift(org[i]);
    if (cnt++ % 3 === 0) ret.unshift(",");
  }
  return txts[0] + ret.join("") + txts[1];
}
const total = { price: 45000, vat: 4500 };
console.log(fmt`주문합계: ${total.price}원`);
console.log(fmt`세액합계: ${total.vat}원`);

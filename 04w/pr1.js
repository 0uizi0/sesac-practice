for (let i = 0.1; i < 1; i += 0.1) {
  const result = Number(i.toFixed(1));
  result == 1.0 ? console.log(1) : console.log(result);
}

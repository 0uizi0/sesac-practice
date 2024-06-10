for (let i = 1; i <= 10; i += 1) {
  const result = Math.sqrt(i);
  if (result % 1) console.log(result.toFixed(3)); // 무리수만 출력
}

const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];

// 내가 보기 편한 코드
const { id: id1 } = arr[0][0];
const [{ id: id2 }, { id: id3 }] = arr[1];
console.log(id1, id2, id3); // 1 2 3

// 한 줄로 표현한 코드
const [[{ id: td1 }], [{ id: td2 }, { id: td3 }]] = arr;
console.log(td1, td2, td3); // 1 2 3

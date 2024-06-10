// switch문을 사용한 방법
const checkDayOfWeek1 = (day) => {
  const dayNum = day.getDay(); // 요일번호 (Sunday - Saturday : 0 - 6)
  let dayOfWeek = "";
  switch (dayNum) {
    case 0:
      dayOfWeek = "일";
      break;
    case 1:
      dayOfWeek = "월";
      break;
    case 2:
      dayOfWeek = "화";
      break;
    case 3:
      dayOfWeek = "수";
      break;
    case 4:
      dayOfWeek = "목";
      break;
    case 5:
      dayOfWeek = "금";
      break;
    case 6:
      dayOfWeek = "토";
      break;
  }
  return `오늘은 ${dayOfWeek}요일 입니다.`;
};

const today = new Date();
console.log(checkDayOfWeek1(today));

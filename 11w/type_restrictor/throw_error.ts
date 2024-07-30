// 다음에서 '가', '나', '다' 어떤 걸 throw 해도 에러 메시지를 출력하도록 (라) 부분을 수정하시오.
const isMessageError = (
  err: unknown
): err is {
  message: string;
} => !!err && typeof err === "object" && "message" in err;

try {
  // throw new AError('AError Occurs!!');
  // throw new Error('some error!!!!'); // 가
  // throw 'some string error!!!'; // 나
  throw ["some", "array", "error"]; // 다
} catch (error) {
  if (isMessageError(error)) console.log(error.message); // (라)
  else console.log(JSON.stringify(error));
}
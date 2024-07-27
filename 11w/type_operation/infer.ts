// 특정 함수의 인자 타입을 추출하는 유틸리티 타입을 작성하시오. (infer)
type FirstArgs<F> = F extends (...args: infer Arg) => unknown ? Arg[0] : never;
type SecondArgs<F> = F extends (...args: infer Arg) => unknown ? Arg[1] : never;
// type Args<F> = F extends (...args: infer Arg) => unknown ? Arg : never;

function add(a: number, b: string) {
  return `${a} - ${b}`;
}

type A = FirstArgs<typeof add>; // number
type B = SecondArgs<typeof add>; // string
// type C = Args<typeof add>; // number | string

// type AX = Args<typeof String.prototype.endsWith>;
// // ⇒ string | number | undefined
// type AX = Args<typeof String.prototype.charAt>;
// // ⇒ number

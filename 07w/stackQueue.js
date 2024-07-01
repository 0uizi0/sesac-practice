class Stack {
  #arr;

  constructor(values) {
    this.#arr = values ?? [];
  }

  getStack() {
    return this.#arr;
  }

  push(el) {
    this.#arr = [...this.#arr, el];
  }

  pop() {
    const newArr = [...this.#arr];
    this.#arr = newArr.slice(0, -1);
    return Number(newArr.slice(-1));
  }
}

class Queue {
  #arr;

  constructor(values) {
    this.#arr = values ?? [];
  }

  getQueue() {
    return this.#arr;
  }

  enqueue(el) {
    this.#arr = [...this.#arr, el];
  }

  dequeue() {
    const newArr = [...this.#arr];
    this.#arr = newArr.slice(1);
    return Number(newArr.slice(0, 1));
  }
}

const stack = new Stack();
stack.push(3);
stack.push(5);
console.log(stack.getStack()); // [3, 5]
console.log(stack.pop()); // 5
console.log(stack.getStack()); // [ 3 ]

const s2 = new Stack([1, 2]);
console.log(s2.getStack()); // [1, 2]
s2.push(3);
s2.push(5);
console.log(s2.getStack()); // [ 1, 2, 3, 5 ]
console.log(s2.pop()); // 5
console.log(s2.getStack()); // [ 1, 2, 3 ]

console.log("--------------------------------------");

const queue = new Queue();
queue.enqueue(3);
queue.enqueue(5);
console.log(queue.getQueue()); // [ 3, 5 ]
console.log(queue.dequeue()); // 3
console.log(queue.getQueue()); // [ 5 ]

const q2 = new Queue([1, 2]);
console.log(q2.getQueue()); // [1, 2]
q2.enqueue(3);
q2.enqueue(5);
console.log(q2.getQueue()); // [ 1, 2, 3, 5 ]
console.log(q2.dequeue()); // 1
console.log(q2.getQueue()); // [ 2, 3, 5 ]

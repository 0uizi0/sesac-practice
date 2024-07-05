class Collection {
  #arr;
  constructor(...args) {
    this.#arr = Array.isArray(args[0]) ? args[0] : args || [];
  }
  get _arr() {
    return this.#arr;
  }
  print() {
    if (this.#isStack()) {
      return this.#arr.join(",");
    }
  }
  #isStack() {
    return this.constructor.name === "Stack";
  }
  *[Symbol.iterator]() {
    for (let i = 0; i < this.#arr.length - 1; i += 1) {
      yield this.#arr[i];
    }
  }
  iterator() {
    return this[Symbol.iterator]();
  }
}

class Stack extends Collection {
  push(v) {
    super._arr.push(v);
    return this;
  }
  pop() {
    return this._arr.pop();
  }
}

class Queue extends Collection {
  enqueue(v) {
    super._arr.unshift(v);
    return this;
  }
  dequeue() {
    return this._arr.pop();
  }
  *[Symbol.iterator]() {
    for (let i = this._arr.length - 1; i < 0; i -= 1) {
      yield this._arr[i];
    }
  }
}

class ArrayList extends Collection {
  add(val, idx) {
    this._arr.splice(idx ?? this._arr.length, 0, val);
  }
  remove(idx) {
    return this._arr.splice(idx);
  }
  indexOf(val) {
    return this._arr.indexOf(val);
  }
  set(idx, val) {
    this._arr[idx] = val;
  }
  get(val) {
    return this._arr[this._arr.indexOf(val)];
  }
  contains(val) {
    return this._arr.includes(val);
  }
  toArray() {
    return this._arr;
  }
  toList() {
    return this.constructor.arrayToList(this._arr);
  }
  clear() {
    this._arr.length = 0;
  }
  static listToArray(list) {
    const arr = [];
    let node = list;
    while (true) {
      arr.push(node.value);
      node = node?.rest;

      if (!node) break;
    }
  }
  static arrayToList(arr) {
    let node = { value: arr.at(-1) };
    for (let i = arr.length - 2; i >= 0; i -= 1) {
      node = { value: arr[i], rest: node };
    }
    return node;
  }
  toString() {
    return ArrayList.arrayToList(this._arr);
  }
}

const stack = new Stack(); // or new Stack([1,2]); // ⇐⇒ (1,2)
stack.push(3); // 추가하기
console.log(stack.pop()); // 마지막에 추가된 하나 꺼내기

const queue = new Queue();
queue.enqueue(3); // 추가하기
queue.enqueue(2); // 추가하기
console.log(queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기
console.log(queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기

ArrayList.listToArray({ value: 1, rest: { value: 2 } }); // ⇒ [1,2]
ArrayList.arrayToList([1, 2]); // ⇒ { value: 1, rest: { value: 2 } }

const alist = new ArrayList([1, 2]); // alist.toString() ⇒ { value: 1, rest: { value: 2 } }
alist.add(3); // { value: 1, rest: { value: 2, rest: { value: 3 } } }
alist.add(5, 1); // { value: 1, rest: { value: 5, rest: { value: 2, rest: { value: 3 } }}
alist.remove(2); // { value: 1, rest: { value: 3 } }
alist.add(22, 1); // { value: 1, rest: { value: 22, rest: { value: 3 } } }
alist.add(33, 1);
alist.print(); // ArrayList(4) { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 3 } } } }
alist.set(1, 300); // { value: 1, rest: { value: 300, rest: { value: 22, rest: { value: 3 } } } }
alist.get(2);
alist.size; // 22, 4
alist.indexOf(300); // 1
alist.contains(300);
alist.contains(301); // true, false
alist.isEmpty;
alist.peek; // false, 3
alist.toArray(); // [1, 300, 22, 3]
alist.iterator().next(); // { value: 1, done: false }
alist.clear(); // all clear

export class Collection {
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
export class Stack extends Collection {
  push(v) {
    super._arr.push(v);
    return this;
  }
  pop() {
    return this._arr.pop();
  }
}
export class Queue extends Collection {
  enqueue(v) {
    super._arr.unshift(v);
    return this;
  }
  dequeue() {
    return this._arr.pop();
  }
  *[Symbol.iterator]() {
    for (let i = this.length - 1; i < 0; i -= 1) {
      yield this._arr[i];
    }
  }
}
export class ArrayList extends Collection {
  add(val, idx) {
    this._arr.splice(idx ?? this._arr.length, 0, val);
  }
  remove(idx) {
    return this._arr.splice(idx);
  }
  indexOf(val) {
    return this._arr.indexOf(val);
  }
  sets(idx, val) {
    this._arr[idx] = val;
  }
  get(val) {
    return this._arr[this._arr.indexOf(val)];
  }
  contains(val) {
    return this._arr.includes(val);
  }
  clear() {
    this._arr.length = 0;
  }
  toArray() {
    return this._arr;
  }
  toList() {
    return this.constructor.arrayToList(this._arr);
  }
  static listToArray(list) {
    const arr = [];
    let node = list;
    while (true) {
      arr.push(node);
      node = node?.rest;

      if (!node) break;
    }
    return arr;
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

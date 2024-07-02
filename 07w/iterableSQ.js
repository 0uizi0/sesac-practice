class Iterator {
  arr;

  constructor(values) {
    this.arr = values ?? [];
  }

  [Symbol.iterator] = () => {
    let idx = 0;
    const els = [...this.arr];
    return {
      next() {
        return {
          value: els[idx++],
          done: idx > els.length,
        };
      },
    };
  };

  iterator() {
    let idx = 0;
    const els = [...this.arr];
    return {
      next() {
        return {
          value: els[idx++],
          done: idx > els.length,
        };
      },
    };
  }
}

class Collection extends Iterator {
  clear() {
    this.arr = [];
  }
  toArray() {
    return this.arr;
  }
  print() {
    console.log(this.arr);
  }
  get isEmpty() {
    return this.arr.length === 0 ? true : false;
  }
  get length() {
    return this.arr.length;
  }
  get peek() {}
  get poll() {}
  remove() {}
}

class Stack extends Collection {
  get peek() {
    return Number([...this.arr].slice(-1));
  }
  get poll() {
    const newArr = [...this.arr];
    this.arr = newArr.slice(0, -1);
    return Number(newArr.slice(-1));
  }
  remove() {
    this.arr = [...this.arr].slice(0, -1);
  }

  push(el) {
    this.arr = [...this.arr, el];
  }
  pop() {
    const newArr = [...this.arr];
    this.arr = newArr.slice(0, -1);
    return Number(newArr.slice(-1));
  }
}

class Queue extends Collection {
  get peek() {
    return Number([...this.arr].slice(0, 1));
  }
  get poll() {
    const newArr = [...this.arr];
    this.arr = newArr.slice(1);
    return Number(newArr.slice(0, 1));
  }
  remove() {
    this.arr = [...this.arr].slice(1);
  }

  enqueue(el) {
    this.arr = [...this.arr, el];
  }
  dequeue() {
    const newArr = [...this.arr];
    this.arr = newArr.slice(1);
    return Number(newArr.slice(0, 1));
  }
}

const queue = new Queue([3, 4, 5, 6]);
const stack = new Stack([3, 4, 5, 6]);

console.log([...stack], [...queue]);
for (const s of stack) console.log(s);
for (const q of queue) console.log(q);

const itStack = stack[Symbol.iterator](); // 또는 const itStack = stack.iterator();
console.log(itStack.next());
console.log(itStack.next());

const itQueue = queue.iterator();
console.log(itQueue.next());

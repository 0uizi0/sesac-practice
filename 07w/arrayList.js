class ArrayList {
  list;
  depth;

  constructor(values) {
    [this.list, this.depth] = ArrayList.arrayToList(values);
  }

  static listToArray(list) {
    let length = 0;
    function recursive(input, org = []) {
      const t = [...org, input.value];
      length += 1;

      if (typeof input.rest === "undefined") {
        return t;
      }

      return recursive(input.rest, t);
    }
    const ret = recursive(list);
    return [ret, length];
  }

  static arrayToList(arr) {
    let length = 0;

    function recursive(input) {
      const t = {};
      const [v, ...r] = input;
      t.values = v;
      length += 1;

      if (r.length == 0) {
        return t;
      }

      t.rest = recursive(r);
      return t;
    }
    const ret = recursive(arr);
    // this.depth = length;
    return [ret, length];
  }

  print() {
    console.log(JSON.stringify(this.list));
  }

  add(v, d = this.depth) {
    console.log("v", v, "depth", d);
    console.log("this.list", this.list);
  }
}

// ArrayList.listToArray({ value: 1, rest: { value: 2 } });
// ⇒ [1,2]

// ArrayList.arrayToList([1, 2]);
// ⇒ { value: 1, rest: { value: 2 } }

const alist = new ArrayList([1, 2]); // alist.toString() ⇒ { value: 1, rest: { value: 2 } }s
alist.add(3); // { value: 1, rest: { value: 2, rest: { value: 3 } } }
// alist.add(5, 1);  // { value: 1, rest: { value: 5, rest: { value: 2, rest: { value: 3 } }}
// alist.remove(2);  // { value: 1, rest: { value: 3 } }
// alist.add(22, 1); // { value: 1, rest: { value: 22, rest: { value: 3 } } }
// alist.add(33, 1);
alist.print(); // ArrayList(4) { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 3 } } } }
// alist.set(1, 300);  // { value: 1, rest: { value: 300, rest: { value: 22, rest: { value: 3 } } } }
// alist.get(2);  alist.size;  // 22, 4
// alist.indexOf(300);  // 1
// alist.contains(300); alist.contains(301);  // true, false
// alist.isEmpty; alist.peek;  // false, 3
// alist.toArray();  // [1, 300, 22, 3]
// alist.iterator().next();  // { value: 1, done: false }
// alist.clear();  // all clear

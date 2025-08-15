const { useDebugValue } = require("react");

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  get(index) {
    return this.data[index];
  }
  pop() {
    if (this.length === 0) return undefined;

    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];

    this.length--;
    return lastItem;
  }
}

const myNewArray = new MyArray();
console.log(myNewArray.push("apple"));
console.log(myNewArray.push("orange"));
console.log(myNewArray.push("banana"));

console.log(myNewArray.get(1), "index");
console.log(myNewArray.pop());
console.log(myNewArray);

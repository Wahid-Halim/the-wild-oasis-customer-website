// const { useDebugValue } = require("react");

const {
  getFirstDynamicReason,
} = require("next/dist/server/app-render/dynamic-rendering");
const { Sora, Aladin } = require("next/font/google");

// class MyArray {
//   constructor() {
//     this.length = 0;
//     this.data = {};
//   }

//   push(item) {
//     this.data[this.length] = item;
//     this.length++;
//     return this.length;
//   }

//   get(index) {
//     return this.data[index];
//   }
//   pop() {
//     if (this.length === 0) return undefined;

//     const lastItem = this.data[this.length - 1];
//     delete this.data[this.length - 1];

//     this.length--;
//     return lastItem;
//   }
// }

// const myNewArray = new MyArray();
// console.log(myNewArray.push("apple"));
// console.log(myNewArray.push("orange"));
// console.log(myNewArray.push("banana"));

// console.log(myNewArray.get(1), "index");
// console.log(myNewArray.pop());
// console.log(myNewArray);

const moveCharsForward = (str) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const tempStr = str.split("").reduce((accu, char, i) => {
    if (alphabet.includes(char)) {
      return accu.replace(char, alphabet.lastIndexOf(char + 1));
    }
  }, str);

  console.log(tempStr);
};

console.log(moveCharsForward("write"));

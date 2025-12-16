// Polyfill for Map

// Array.map((num, i, arr)=>{...})

Array.prototype.myMap = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    const res = callback(this[i], i, this);
    temp.push(res);
  }
  return temp;
};

const nums = [1, 2, 3, 4];
const Multiply = nums.myMap((num) => num * 2);

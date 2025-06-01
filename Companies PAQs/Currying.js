// Currying is a concept in javascript in which we pass functions as arguments and return functions

let curry = (fn) => {
  let helper = (...args) => {
    if (args.length === fn.length) {
      return fn(...args);
    } else {
      let temp = (...args2) => {
        return helper(...args, ...args2);
      };
      return temp;
    }
  };
  return helper;
};

function sum(a, b, c, d) {
  return a + b + c + d;
}

const currySum = curry(sum);
console.log(currySum(1, 2, 3, 4, 5));
console.log(currySum(1)(2, 3)(4));
console.log(currySum(1)(2)(3)(4));

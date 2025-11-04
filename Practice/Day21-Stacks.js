// Implement Queue using Stacks

// Implementation of Stack using 1 queue
class MyQueueUsingStack {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }

  push(x) {
    this.s1.push(x);
  }
  pop() {
    if (this.s2.length === 0) {
      while (this.s1.length) {
        // Transfer elements to s2 if s2 is empty as Stack is LIFO but we need FIFO for Queue
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2.pop(); // Pop the first element
  }
  peek() {
    if (this.s2.length === 0) {
      while (this.s1.length) {
        // Transfer elements to s2 if s2 is empty as Stack is LIFO but we need FIFO for Queue
        this.s2.push(this.s1.pop());
      }
    }
    return this.s2[this.s2.length - 1]; // return top element
  }
  empty() {
    return this.s1.length === 0 && this.s2.length === 0; // Check if both stacks are empty
  }
}

// Valid Parentheses

function isValidParenthesis(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      // Push opening brackets to stack
      stack.push(s[i]);
    } else {
      let top = stack.pop();
      if (
        !top ||
        (top === "[" && s[i] != "]") || // Pop and check for matching bracket
        (top === "{" && s[i] != "}") ||
        (top === "(" && s[i] != ")")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// Optimized and Clean Appproach for the above function
function isValidParenthesisOptim(s) {
  let stack = [];
  let map = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      let top = stack.pop();
      if (!top || s[i] != map[top]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

class MyMinStack {
  constructor() {
    this.s = [];
  }
  push(val) {
    if (this.s.length === 0) {
      this.s.push([val, val]); // Store value and min value as array in Stack, initially set both as same
    } else {
      let minVal = Math.min(val, this.s[this.s.length - 1][1]); // Compare incoming value with min value and then push new min value
      this.s.push([val, minVal]);
    }
  }
  pop() {
    return this.s.pop();
  }
  top() {
    return this.s[this.s.length - 1][0]; // top will be at index 0
  }
  minValue() {
    return this.s[this.s.length - 1][1]; // min value will be at index 1
  }
}

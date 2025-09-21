// Implementation of Stack using 2 queues

class MyStack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }
  push(x) {
    this.q1.push(x);
  }
  pop() {
    let n = this.q1.length;
    for (let i = 0; i < n - 1; i++) {
      let front = this.q1.shift();
      this.q2.push(front);
    }
    let ans = this.q1.shift();
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
    return ans;
  }
  top() {
    let n = this.q1.length;
    for (let i = 0; i < n - 1; i++) {
      let front = this.q1.shift();
      this.q2.push(front);
    }
    let last = this.q1[0];
    this.q2.push(this.q1.shift());
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
    return last;
  }
  empty() {
    return this.q1.length === 0;
  }
}

// Implementation of Stack using 1 queue
class MyStack2 {
  constructor() {
    this.q = [];
  }

  push(x) {
    this.q.push(x);
  }
  pop() {
    let n = this.q.length;
    for (let i = 0; i < n - 1; i++) {
      this.q.push(this.q.shift()); // Remove and add at back and after n-1 loop return the element
    }
    return this.q.shift();
  }
  top() {
    let n = this.q.length;
    for (let i = 0; i < n; i++) {
      this.q.push(this.q.shift());
    }
    let front = this.q[0];
    this.q.push(this.q.shift());
    return front;
  }
  empty() {
    return this.q.length === 0;
  }
}

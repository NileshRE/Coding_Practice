// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.
// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6

function evalRevPolishNotation(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (/[0-9]/.test(s[i])) {
      stack.push(s[i]);
    } else {
      let a = stack.pop();
      let b = stack.pop();
      let res = eval(`${b} ${s[i]} ${a}`);
      stack.push(Math.trunc(res));
    }
  }
  return Number(stack.pop());
}

function nextGreaterElement(nums1, nums2) {
  let stack = [];
  let ngeMap = {};
  let n = nums2.length;
  stack.push(arr[n - 1]);
  ngeMap[nums2[n - 1]] = -1;
  for (let i = n - 2; i >= 0; i++) {
    while (stack.length) {
      if (stack[stack.length - 1] < nums2[i]) {
        stack.pop();
      } else {
        ngeMap[nums2[i]] = stack[stack.length - 1];
        break;
      }
    }
    if (stack.length === 0) {
      ngeMap[nums2[i]] = -1;
    }
    stack.push(nums2[i]);
  }
  return nums1.map((x) => ngeMap[x]);
}

function dailyTemperatures(arr) {
  let stack = []; // Stack to manage indexes of temperatures
  let n = arr.length;
  let ans = Array(n).fill(0); // Answer array to calculate ans
  stack.push(n - 1); // Push last index initially

  for (let i = n - 2; i >= 0; i--) {
    // Start loop from 2nd last element till 1st element
    while (stack.length) {
      let top = stack[stack.length - 1]; // Set element as top
      if (arr[i] >= arr[top]) {
        // If current element is greater than or equal to pop from stack
        stack.pop();
      } else {
        ans[i] = top - i; // else calculate ans by subtracting
        break;
      }
    }
    if (!stack.length) {
      ans[i] = 0;
    }
    stack.push(i); // Keep pushing indexes to stack
  }
  return ans;
}

// Input: nums = [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2;
// The number 2 can't find next greater number.
// The second 1's next greater number needs to search circularly, which is also 2.

function nextGreaterElem2(nums) {
  let numsArr = [...nums, ...nums]; // Doubling the array to remove circularity
  let n = numsArr.length;

  let stack = [];
  let ans = Array(n).fill(-1); // Fill ans array with -1 initially
  stack.push(numsArr[n - 1]); // Push last element initially
  for (let i = n - 2; i >= 0; i--) {
    // Start loop from 2nd last element till 1st element
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (numsArr[i] < top) {
        // if current elem is less than top, set ans at index i = top
        ans[i] = top;
        break;
      } else {
        // else pop out
        stack.pop();
      }
    }
    stack.push(numsArr[i]); // Keep pushing the values to stack
  }
  return ans.slice(0, n / 2); // Since array was doubled slice till n/2
}

// Arrays

// Remove Duplicates from non-decreasing Array and return in same order with count of unique elements

function removeDuplicates(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      //Check if element at i is greater than element at x position
      x = x + 1; // If above condition is true, increase x by 1, means increase its position
      arr[x] = arr[i]; // For maintaining order assign new value at x position;
    }
  }
  return { array: arr, count: x + 1 };
}

// Remove a given element from an array

function removeElement(arr, val) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      arr[x] = arr[i];
      x = x + 1;
    }
  }
  return { array: arr, count: x };
}

// Reverse a string at 0(1) space complexity

function reverseString(stringArray) {
  const revString = stringArray.reverse(); // Not 0(1) as we taking space for new variable
  return revString;
}
function reverseStringOptimized(stringArray) {
  let n = stringArray.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    let temp = stringArray[i];
    stringArray[i] = stringArray[n - 1 - i];
    stringArray[n - 1 - i] = temp;
  }
  return stringArray;
}

// Best time to buy and sell stock

function maxProfit(pricesArray) {
  let min = pricesArray[0];
  let maxProfit = 0;
  for (let i = 0; i < pricesArray.length; i++) {
    if (pricesArray[i] - min > maxProfit) {
      maxProfit = pricesArray[i] - min;
    }
    if (pricesArray[i] < min) {
      min = pricesArray[i];
    }
  }
  return maxProfit;
}

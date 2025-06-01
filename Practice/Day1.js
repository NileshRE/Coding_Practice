// Get Index of Number in an Array
function getIndexOfNum(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

// Count of negative numbers in an Array
function getNegativeNosCount(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}

//Find Largest number in an Array
function findLargest(arr) {
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

//Find Smallest number in an Array
function findSmallest(arr) {
  if (arr.length === 0) {
    console.log("No element found");
    return null;
  }
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

//Find Second largest in an Array
function findSecondLargest(arr) {
  if (arr.length === 0) {
    console.log("No element to compare");
    return null;
  }
  if (arr.length < 2) {
    console.log("Must be 2 elements to compare");
    return null;
  }
  let largest = -Infinity;
  let secondLargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

//Find Second smallest in an Array
function findSecondSmallest(arr) {
  if (arr.length === 0) {
    console.log("No element to compare");
    return null;
  }
  if (arr.length < 2) {
    console.log("Must be 2 elements to compare");
    return null;
  }
  let smallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] != smallest) {
      secondSmallest = arr[i];
    }
  }
  return secondSmallest;
}

let arr = [0, 0, 3, 23, 23, 16, 8];
console.log(findSecondSmallest(arr));

// Bubble Sort -- Bubbling or pushing the largest to last position
function bubbleSort(arr) {
  // Space complexity - O(1)
  let n = arr.length; // Time Complexity - O(n*n)
  for (let i = 0; i < n - 1; i++) {
    let isSwapped = false; // If in any iteration no swap happens, stop sorting which can reduce time complexity.
    for (j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break; // break loop if swap state is false after j loop
  }
  return arr;
}

// Selection Sort
function selectionSort(arr) {
  // Time Complexity - O(n*n) Space Complexity - O(1)
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      let temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

// Insertion Sort

function insertionSort(arr) {
  let n = arr.length; // Time Complexity - O(n*n) Space Compelxity - O(1)
  for (let i = 1; i < n; i++) {
    let curr = arr[i];
    let prev = i - 1;
    while (arr[prev] > curr && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr;
  }
  return arr;
}

// Merge Sort (Divide and Conquer)

function mergeSort(arr) {
  if (arr.length <= 1) return arr; // Base condition for stopping recursion
  let mid = Math.floor(arr.length / 2); // Find the mid point of array
  let left = mergeSort(arr.slice(0, mid)); // Dividing in 2 half - left and right
  let right = mergeSort(arr.slice(mid));
  return merge(left, right); // merge and return the sorted array for both left and right recursively
}

function merge(left, right) {
  let res = [];
  let i = 0;
  j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      // Compare 2 arrays element by element and insert the amllest into new array
      res.push(left[i]);
      i++; // and then move the pointer to next element
    } else {
      res.push(right[j]);
      j++;
    }
  }
  return [...res, ...left.slice(i), ...right.slice(j)]; // Return remaining element after any one array is exhausted.
}

let arr = [0, 9, 76, 54, -1, 3, 8];
console.log(mergeSort(arr));

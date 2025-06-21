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

let arr = [5, 4, 8, 1, 0, 6];
console.log(bubbleSort(arr));

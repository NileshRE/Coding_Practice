// //Linear search
const arr = [0, 1, 2, 7, 9];
// function linearSearch(arr, n) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == n) {
//       return i;
//     }
//   }
//   return -1;
// }

// Binary Search

function binarySearch(arr, target) {
  // Works on sorted array and complexity is O(log n)
  let left = 0;
  let right = arr.length - 1;
  while (right >= left) {
    let middle = Math.floor((left + right) / 2);
    if (target == arr[middle]) {
      return middle;
    } else if (target < arr[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

console.log(binarySearch(arr, 9));

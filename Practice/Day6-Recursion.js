// Sum of n numbers using Recursion

function sum(num) {
  if (num == 0) return 0;
  return num + sum(num - 1);
}

// Sum of n elements of an array using Recursion

const arr = [1, 2, 3, 45, 5];
function sumArr(n) {
  if (n == 0) return arr[n];
  return arr[n] + sumArr(n - 1);
}

// Factorial of n numbers

function fact(n) {
  if (n == 0) return 1;
  return n * fact(n - 1);
}

// Sum of odd numbers in an Array

const oddArray = [5, 2, 3, 4, 0, 6, 7];

function sumOfOdd(n) {
  const isOdd = oddArray[n] % 2 != 0;
  if (n == 0) {
    return isOdd ? oddArray[n] : 0;
  }
  return (isOdd ? oddArray[n] : 0) + sumOfOdd(n - 1);
}

//Check if n is power of two
function powerOfTwo(n) {
  if (n == 1) return true;
  else if (n < 1 || n % 2 != 0) return false;
  return powerOfTwo(n / 2);
}

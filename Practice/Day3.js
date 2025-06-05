let n = -123908;

function getNumberCount(n) {
  // Handling zero
  if (n == 0) return 1;
  // Handling negative numbers
  n = Math.abs(n);
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
console.log(getNumberCount(n));

//Palindrome number check

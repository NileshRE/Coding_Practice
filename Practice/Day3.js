let num = 2552;

function getNumberCount(n) {
  // Handling zero
  if (n == 0) return 1;
  // Handling negative numbers
  n = Math.abs(n);
  let newN = n;
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return `No. of digits in ${newN} is ${count}`;
}
console.log(getNumberCount(num));

//Palindrome number check
function isPalindrome(n) {
  if (n == 0) return true;
  if (n < 0) return false;
  let newN = n;
  let rev = 0;
  while (newN > 0) {
    let rem = newN % 10;
    rev = 10 * rev + rem;
    newN = Math.floor(newN / 10);
  } // returns reverse of a number
  if (rev == n) {
    return `${n} is palindrome`;
  } else {
    return `${n} is not palindrome`;
  }
}
console.log(isPalindrome(num));

// Find length of last word (using 2 loops)

function findLengthOfLastWord(s) {
  let n = s.length - 1; // Get the length of string
  while (n >= 0) {
    // Loop till n is positive or zero
    if (s[n] != " ") break; // If a letter comes break the loop since we are trying to reach the last word by skipping spaces
    --n;
  }
  let count = 0; // variable for word count
  while (n >= 0) {
    if (s[n] === " ") break; // If a space comes means word ends here hence word count will be completed.
    --n;
    count++; // Increase by 1 in each loop
  }
  return count; // Return count
}
// Time & space complexity - O(n) && O(1)

// Find length of last word (using single loop)

function findLengthOfLastWordOneLoop(s) {
  let n = s.length - 1;
  let count = 0;
  while (n >= 0) {
    if (s[n] != " ") {
      // Increase count if a letter is encountered
      ++count;
    } else if (count > 0) {
      // If count is positive and then a space is encountered break the loop.
      break;
    }
    --n; // decrease n since we are looping backwards
  }
  return count;
}
// Time & space complexity - O(n) && O(1)

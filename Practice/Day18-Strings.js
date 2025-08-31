// Valid Palindrome String

function validPalindrome(s) {
  let str = s.toLowerCase();
  let filteredStr = "";
  let rev = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z0-9]/i)) {
      filteredStr = filteredStr + str[i]; // Add right wise for filtered string
      rev = str[i] + rev; // Add left wise for reverse
    }
  }
  return filteredStr === rev;
}

// Time & Space Complexity - O(n) since both are based on strring length

// Approach using two pointers to reduce space complexity to O(1)

function validPalindromeStr(s) {
  s = s.toLowerCase();
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (!s[i].match(/[a-z0-9]/i)) {
      // Match for finding non-alphanumeric chars
      ++i;
    } else if (!s[j].match(/[a-z0-9]/i)) {
      --j;
    } else if (s[i] === s[j]) {
      // If two chars are same keep on looping
      ++i;
      --j;
    } else {
      // If chars does not match at any point, return false
      return false;
    }
  }
  return true;
}

//Largest Odd number in a string

function largestOddinString(s) {
  let str = s.length - 1;
  while (str >= 0) {
    // Loop till first index
    if (Number(s[str]) % 2 == 1) {
      // If an odd number is found return the substring
      return s.substring(0, str + 1);
    }
    --str;
  }
  return "";
}

// Longest Common Prefix

function findLongestCommonPrefix(strs) {
  let x = 0;
  while (x < strs[0].length) {
    // Loop through 1st element length
    let char = strs[0][x]; // Select the first character
    for (let i = 1; i < strs.length; i++) {
      // Loop through strs array, take 1st element as comparator and compare with other elements
      if (char != strs[i][x] || x == strs[i].length) {
        // If char mismatch found or string is exhausted return substring
        return strs[0].substring(0, x);
      }
    }
    ++x; // increment x to check with 0, 1, 2 positions
  }
  return strs[0]; // If x is more than length of string, return the whole string as common prefix as all strings are checked till now and no mismatch is found.
}

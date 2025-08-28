// Find sum of most frequent vowel and consonant

function mostFrequencyVCSum(string) {
  let stringMap = new Map(); // Initiate a new map
  for (let i = 0; i < string.length; i++) {
    // Loop through string and create a map with letter as key and frequency as value
    if (!stringMap.has(string[i])) {
      // If key doesn't exists set 1
      stringMap.set(string[i], 1);
    } else {
      // If exists increase by 1
      stringMap.set(string[i], stringMap.get(string[i]) + 1);
    }
  }
  let vowels = ["a", "e", "i", "o", "u"];
  let maxVowel = 0;
  let maxConsonant = 0;
  stringMap.forEach((value, key) => {
    // For each loop method of Map
    if (vowels.includes(key)) {
      // If vowel key is there, calculate max of key value with maxVowel same for consonant
      maxVowel = Math.max(value, maxVowel);
    } else {
      maxConsonant = Math.max(value, maxConsonant);
    }
  });
  return maxVowel + maxConsonant; // return sum of max values
}

// Time Complexity - O(n)*O(1) as for loop is running and in 2nd case loop is running inside Map which can be max 26 key-value pairs, so O(1)
// Space Complexity - O(1) as map can have max 26 key-value pairs in case of string

// Split a String in Balanced Strings

function splitBalancedStrings(str) {
  let temp = 0; // Take a temporary variable
  let count = 0; // Count for balanced strings
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "R") {
      // If R letter found increase temp by 1
      temp++;
    } else {
      // else decrease by 1
      temp--;
    }
    if (temp === 0) {
      // If temp becomes 0, balance is found increase count by 1
      ++count;
    }
  }
  return count;
}

// Space & Time complexity - O(n) & O(1)

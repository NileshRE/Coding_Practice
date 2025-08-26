// Find words containing character

function findWordsContainingChar(words, x) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    // Loop to the words array first and then each letter of the word
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        // If found the same letter push the index to result array and break as we only need to check if letter is found not how many times
        res.push(i);
        break;
      }
    }
  }
  return res; // Return result array
}

// Find Jewels and Stones

function findJewelsAndStones(jewels, stones) {
  let jSet = new Set(); // Create a set that will store only unique values
  for (let i = 0; i < jewels.length; i++) {
    // Loop through jewels and store values
    jSet.add(jewels[i]);
  }
  let count = 0;
  for (let j = 0; j < stones.length; j++) {
    // Loop through stones and check
    if (jSet.has(stones[i])) {
      // Check if the set has the stone or not
      ++count;
    }
  }
  return count;
}

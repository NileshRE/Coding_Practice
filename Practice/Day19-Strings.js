function groupedAnagrams(strs) {
  let map = {};
  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split("").sort().join(""); // m log n as sorting for each element
    if (!map[sortedStr]) {
      map[sortedStr] = [strs[i]];
    } else {
      map[sortedStr].push(strs[i]);
    }
  }
  return [...Object.values(map)];
}

// Time Complexity -- O(n * m log m) Space Complexity - O(nm) n length of elements and m is size of element

function groupAnagramsOptm(strs) {
  let map = {}; // Initiate a map
  for (let i = 0; i < strs.length; i++) {
    // Loop through strings and create a freq Arr for each string
    let freqArr = Array(26).fill(0);
    let s = strs[i];
    for (let j = 0; j < s.length; j++) {
      // Loop through string
      let index = s[j].charCodeAt() - "a".charCodeAt(); // get the index of letter by subtraction
      ++freqArr[index]; // keep adding at freq array index for each letter occurence
    }
    let key = "";
    for (let k = 0; k < 26; k++) {
      key = key + String.fromCharCode(k + 97) + freqArr[k]; // Creation of key, using k+97 as small case alphabets start from there
    }
    if (!map[key]) {
      // If key doesn't exist create new else push
      map[key] = [s];
    } else {
      map[key].push(s);
    }
  }
  return [...Object.values(map)]; // Return object values
}
// Time & Space Complexity - O(m*n)

function validAnagram(s, t) {
  if (s.length !== t.length) return false;
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  for (let k = 0; k < t.length; k++) {
    if (!map.has(t[k]) || map.get(t[k]) <= 0) {
      return false;
    } else {
      map.set(t[k], map.get(t[k]) - 1);
    }
  }
  return true;
}

function isomorphicString(s, t) {
  if (s.length !== t.length) return false;
  let sToTMap = new Map();
  let tToSMap = new Map();
  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];
    let tChar = t[i];
    if (!sToTMap.has(sChar) && !tToSMap.has(tChar)) {
      sToTMap.set(sChar, tChar);
      tToSMap.set(tChar, sChar);
    } else if (tToSMap.get(tChar) !== sChar || sToTMap.get(sChar) !== tChar) {
      // Cross check for values already mapped
      return false;
    }
  }
  return true;
}

//Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

function revString(str, k) {
  str = str.split(""); // String is immutable so split it first and conver it to array
  for (let x = 0; x < str.length; x = x + 2 * k) {
    // Jump 2k characters
    let mid = k / 2; // finding the mid
    for (let i = 0; i < mid; i++) {
      // Loop till mid and swap first 2 values
      let temp = str[x + i];
      str[x + i] = str[x + k - i - 1]; // For swaping like (0, 4) (1, 3) first/last second/2ndLast and so on...
      str[x + k - i - 1] = temp;
    }
  }
  return str.join(""); // return as string
}

console.log(revString("abcdefg", 2));

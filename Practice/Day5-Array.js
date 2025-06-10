// Merge 2 Sorted Arrays

// Brute Force Approach

const nums2 = [2, 5, 2];
const nums1 = [1, 2, 3, ...nums2]; // O(m+n)
const sorted = nums1.sort((a, b) => a - b); // Time Complexity O((m+n)log(m+n))

// 2nd approach

// Time Complexity- O(m+n), Space Complexity - O(m)

function mergeSortedArrays(arr1, m, arr2, n) {
  let arr1Copy = arr1.slice(0, m);
  let pt1 = 0;
  let pt2 = 0;
  for (let i = 0; i < m + n; i++) {
    if (pt2 >= n || (pt1 < m && arr1Copy[pt1] < arr2[pt2])) {
      arr1[i] = arr1Copy[pt1];
      pt1++;
    } else {
      arr1[i] = arr2[pt2];
      pt2++;
    }
  }
}

// 3rd approach - Reucing space complexity

function mergeSortedArraysOptimised(arr1, m, arr2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) {
      break;
    }
    if (arr1(p1) > arr2(p2)) {
      arr1[i] = arr1[p];
    } else {
      arr1[i] = arr2[p2];
      p2--;
    }
  }
}

// Shift zeroes to the end

function moveZeroes(nums1) {
  let k = 0;
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] != 0) {
      nums1[k] = nums1[i];
      k++;
    }
  }
  for (let i = k; i < nums1.length; i++) {
    nums1[i] = 0;
  }
  return nums1;
}

// Maximum sequence of consecutive 1's in binary number

function max1sInBinary(nums) {
  let streak = 0;
  let maxStreak = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      streak++;
      console.log("streak", streak);
    } else {
      maxStreak = Math.max(streak, maxStreak);
      streak = 0;
    }
  }

  return Math.max(streak, maxStreak);
}

// Find missing element from an Array

function findMissingNum(nums) {
  const n = nums.length;
  const derivedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i];
    console.log("sum", actualSum);
  }
  return derivedSum - actualSum;
}

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// 1st approach using hashmap

function findSingleNum(nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] == 1) {
      return nums[i];
    }
  }
}

// 2nd approach
function findSingleNumber(nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
}

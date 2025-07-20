// LinkedList Cycle- Check if a linked list is cyclic or not

var hasCycle = function (head) {
  let seenNodes = new Set(); // Initialize an empty set
  let curr = head; // Take head as current node
  while (curr != null) {
    // Loop till the last node
    if (seenNodes.has(curr)) {
      // If seen nodes set contain the curr node return true (It is Cyclic !!)
      return true;
    }
    seenNodes.add(curr); // If set doesn't contain current node, add current node to the Set
    curr = curr.next; // Increase current by 1
  }
  return false; // Not cyclic if similar node not found in Set
};
// Time and Space Complexity = O(n)

// Flyod's algorithm - Take 2 pointers fast and slow and at some point of time both will meet each other

// Optimized Approach

function optimizedHasCycle(head) {
  if (!head) return false;
  let slow = head;
  let fast = head.next;
  while (slow != fast) {
    // Check till slow and fast is same
    if (fast === null || fast.next === null) {
      // null check if linked list is exhausted return false
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
}

// Space Complexity = O(1)

// Check if a linked list is Palindrome

function isLinkedListPalindrome(head) {
  // Get the middle of Linked list
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = head.next;
    fast = head.next.next;
  }
  // Reverse the 2nd half of the list
  let prev = null;
  let curr = slow; // the slow pointer is at the middle, so we start reversing from there
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  // Now check each values of each half one by one, till other half is not null
  let firstList = head;
  let secondList = prev; // as we reversed the linked list, last node was prev and it has become head of 2nd half
  while (secondList) {
    if (firstList.val !== secondList.val) {
      return false;
    }
    firstList = firstList.next;
    secondList = secondList.next;
  }
  return true;
}

// Space & Time complexity --> O(n) & O(1)

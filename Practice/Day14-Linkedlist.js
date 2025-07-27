function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Merge 2 sorted lists

function mergeTwoLists(l1, l2) {
  let start = new ListNode(); // Create a dummy/empty node
  let curr = start; // Assign curr to empty node as we will use curr for checking values
  while (l1 && l2) {
    // Loop till l1 and l2 is defined
    if (l1.val < l2.val) {
      // Compare both lists first value and assign the lowest to curr.next
      curr.next = l1;
      l1 = l1.next; // Increase l1 pointer by 1
    } else {
      curr.next = l2; // If l2 is smaller, do the same with l2
      l2 = l2.next;
    }
    curr = curr.next; // Increase current pointer to next node
  }
  if (!l1) {
    curr.next = l2; // If no l1 node is left curr will point directly to l2 and vice-versa
  }
  if (!l2) {
    curr.next = l1;
  }
  return start.next; // as first node will be 0;
}

// Rotate list by K times

function rotateList(head, k) {
  let length = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    length++;
  } // Calculate length of the list
  k = k % length; // Calculate mod to prevent unnecessary rotations, as if k is multiple of length list will be same after rotation
  let first = head; // Assign head to both pointers
  let second = head;
  for (let i = 0; i < k; i++) {
    // loop till k to reach at k
    first = first.next;
  }
  while (first.next) {
    // Now first is at k and second at head, loop till end of list
    second = second.next;
    first = first.next;
  }
  first.next = head; // assign next of last elements after k to point at head
  let newHead = second.next; // now remaining node will point to null
  second.next = null;
  return newHead;
}

// Swap Node in Pairs (Iterative Approach)

function swapNode(head) {
  if (!head && !head.next) return head; // If 1 or 0 nodes return the element
  let dummy = new ListNode(); // Create empty node
  dummy.next = head; // Link empty node to head
  let prev = dummy; // Assign previous, current and next
  let curr = head;
  let next = head.next;
  while (curr && next) {
    // Loop till current and next are there
    prev.next = next; // Point 2nd node to 1st node
    curr.next = next.next; // Point 2nd node to 3rd node
    next.next = curr; // Point 2nd node back to 1st node
    prev = curr; // Now take all the 3 pointers ahead by 1
    curr = prev.next;
    next = curr && curr.next;
  }
  return dummy.next;
}

// Swap Node in Pairs (Recursive Approach)

function swapNode2(head) {
  if (!head || !head.next) return head;
  let left = head; // Let head be the left pointer
  let right = head.next; // let node next to head right pointer
  left.next = swapNode2(right.next); // Left will point to swapped nodes that will be generated recursively
  right.next = left; // Right will point backwards to left
  return right;
}

function LinkedNode(val) {
  // A node has 2 things, value and reference to next node
  this.val = val;
  this.next = null; // By default last node is pointed to null
}

// Find the intersecting node when 2 linkedLists are given
function getIntersectionNode(headA, headB) {
  let store = new Set(); // Create a new set
  while (headB) {
    // looping for all node values in head B
    store.add(headB); // adding the nodes in store
    headB = headB.next;
  }
  while (headA) {
    // looping for all values of headA
    if (store.has(headA)) {
      // If headA is found in headB return it
      return headA;
    }
    headA = headA.next;
  }
  return null; // If no values matched return null
}

function removeLinkedListElements(head, val) {
  let sentinelNode = new LinkedNode(); // Dummy node to watch for values
  sentinelNode.next = head;
  let prev = sentinelNode;
  while (prev && prev.next) {
    // Loop till any of the values are not null
    if (prev.next.val === val) {
      // values matched change the next to next.next
      prev.next = prev.next.next;
    } else {
      prev = prev.next; // else keep looping
    }
  }
  return sentinelNode.next; // return head
}

//Remove nth node from the end of Linked list

// 2 pass approach

function removeNthFromEnd(head, n) {
  let sentinelNode = new LinkedNode(); // Initializing a dummy node
  sentinelNode.next = head;
  let length = 0;
  while (head) {
    // Finding the length of Linked list
    head = head.next;
    length++;
  }
  let prev = sentinelNode;
  let prevPos = length - n; // finding the element just before the element to be deleted.
  for (let i = 0; i < prevPos; i++) {
    // loop to reach the previous position
    prev = prev.next;
  }
  prev.next = prev.next.next; // Break the current link and assign previous element next to element next to deleted element
  return sentinelNode.next; // return head;
}

// 1 pass approach

function removeNthFromEnd(head, n) {
  let sentinelNode = new LinkedNode();
  sentinelNode.next = head;
  let first = sentinelNode;
  // loop till n nodes
  for (let i = 0; i < n; i++) {
    first = first.next;
  }
  let second = sentinelNode;
  // Start looping from n to last node
  while (first.next) {
    second = second.next;
    first = first.next;
  }
  // Deleting the returned node from 2nd loop
  second.next = second.next.next;
  return sentinelNode.next;
}

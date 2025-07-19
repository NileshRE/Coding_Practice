// Middle of linked list, return the middle if even, return the 2nd one of middle if odd

// Fast and slow pointer approach

var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next; // Slow pointer that will increase by 1;
    fast = fast.next.next; // Fast pointer that will increase by 2
  }
  return slow;
};

// Time complexity - O(n/2), Space Complexity = O(1)

// Reverse Linked List

function reverseLinkedList() {
  let prev = null;
  let curr = head;
  while (curr) {
    let temp = curr.next; // store next node to current temporarily as temp
    curr.next = prev; // Now, the current next will point to prev node
    prev = curr; // Now, increase prev by 1 node and it points to current node
    curr = temp; // Increase curr by 1
  }
  head = prev; // The prev that we will get after all iterations will be assigned head and returned
  return head;
}

function ListNode(val) {
  // A node has 2 things, value and reference to next node
  this.val = val;
  this.next = null; // By default last node is pointed to null
}

// Remove duplicates from sorted list

function deleteDuplicates(head) {
  let curr = head;
  while (curr && curr.next) {
    // if values are same then assign next to next to current next
    if (curr.value == curr.next.value) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
}

// Odd Even Linked list Group odd and even linked list

function oddEvenList(head) {
  if (!head || !head.next) return;
  let odd = head; // Start odd from 1st node
  let even = head.next; // Start even from 2nd node
  let evenStart = even; // Variable to store even group
  while (odd.next && even.next) {
    odd.next = odd.next.next; // Jump to next odd
    even.next = even.next.next; // Jump to next even
    odd = odd.next; // Increase pointer by 1
    even = even.next;
  }
  odd.next = evenStart; // Set even group to end of odd
  return head;
}

// Time and Space complexity = O(n) && O(1) for all

// Two reversed linked lists are given, add them a return a reversed single linked list

function addTwoNums(l1, l2) {
  let ans = new ListNode(); // Create a linked list with empty node
  let answerHead = ans; // We have to return the reversed of sum of 2 lists so it will keep reference to starting pointer
  let carry = 0; // When there is no carry, it will help avoiding error, since we have to loop till carry becomes zero
  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry; // Sum
    carry = Math.floor(sum / 10); // Get the carry
    let digit = sum % 10; // Get the digit to add to node
    let answerNode = new ListNode(digit); // create a node with digit
    ans.next = answerNode; // Assign the created node to empty linked list
    ans = ans.next; // Increase the pointer to next every iteration
    l1 = l1 && l1.next; // Increment to add next values
    l2 = l2 && l2.next;
  }
  return answerHead.next; // Since we have empty node at start, so node after that points to our reesult
}

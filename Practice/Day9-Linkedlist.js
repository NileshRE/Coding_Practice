function Node(val) {
  // A node has 2 things, value and reference to next node
  this.val = val;
  this.next = null; // By default last node is pointed to null
}

var MyLinkedList = function () {
  // Initialize empty linkedlist with head null and size 0
  this.head = null;
  this.size = 0;
};

MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val); // new node created
  newNode.next = this.head; // Current head becomes the next node to newly inserted node
  this.head = newNode; // New node becomes head
  this.size++; // Linked list size is increased
};

MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);
  if (this.head == null) {
    // If empty linkedlist insert value at head
    this.head = newNode;
  } else {
    let curr = this.head; // Take head as current
    while (curr.next != null) {
      // Run a loop to find last node or tail
      curr = curr.next; // Assign current to next node each time
    }
    curr.next = newNode; // Assign new node as next of last node
  }
  this.size++;
};

MyLinkedList.prototype.addAtIndex = function (addIndex, val) {
  if (addIndex < 0 || addIndex >= this.size) return; // Check for invalid index
  let newNode = new Node(val);
  if (addIndex == 0) {
    // If index is first, it is same as adding at head
    this.addAtHead(val);
    return;
  } else if (addIndex == this.size) {
    // If index is last, it is same as adding at tail
    this.addAtTail(val);
    return;
  } else {
    let curr = this.head;
    for (let i = 0; i < addIndex - 1; i++) {
      curr = curr.next;
    } // Find the node before the index where node is to be added
    newNode.next = curr.next; // assign current next node to newNode next
    curr.next = newNode; // Now, current next will be newNode, !! It is like inserting a node between 2 nodes
  }
  this.size++;
};

MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next; // Find index and return value of node
  }
  return curr.val;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;
  if (index == 0) {
    this.head = this.head.next; // If it is first index that is to be deleted, assign next element as the head
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next; // Break the link, find index and put its next node after the index to be deleted
  }
  this.size--; // decrease the list size
};

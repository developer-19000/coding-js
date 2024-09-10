/*
    first we create a node class
    each node has a value and a pointer to the next node (look up LinkedList.md for explanation)
*/
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

/*
    this is the linked list itself
    each linked list has a head and a tail
    the head is the first node in the list
    the tail is the last node in the list
*/
class LinkedList {
  constructor() {
    // an empty linked list has no head or tail
    this.head = null;
    this.tail = null;
  }

  // add a new node to the end of the list
  push(value) {
    /*
              first we check the value 
              if the value is not valid we return
              then we create a new node
              if we don't have a head , meaning the list is empty we set the head and tail to the new node
              if we do have a head we link the tail to the new node and update the tail to the new node
          */
    if (value === undefined || value === null) return;
    let node = new Node(value, null);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
}

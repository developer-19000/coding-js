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
}

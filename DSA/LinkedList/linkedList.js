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

  /*
    first we check the value 
    if the value is not valid we return
    then we create a new node
    if we don't have a head , meaning the list is empty we set the head and tail to the new node
    if we do have a head we link the tail to the new node and update the tail to the new node
  */
  push(value) {
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

  /*
    unshift method adds a new node to the beginning of the list
    first we check if the value is valid , if it is we create a new node
    we set the next pointer of the new node to the head. it is either a value or null
    since we want to append the new node to the beginning of the list we set the head to the new node
    if we don't have a head we set the head and tail to the new node
  */
  unshift(value) {
    if (value === undefined || value === null) return;
    let node = new Node(value, this.head);
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
  }
}

let ll = new LinkedList();
ll.push(23);
ll.push(42);
ll.unshift(12);

console.log(ll);

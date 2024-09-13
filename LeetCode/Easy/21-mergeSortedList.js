// Definition for singly-linked list node
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val; // Initialize the value of the node
  this.next = next === undefined ? null : next; // Initialize the next pointer
}

var mergeTwoLists = function (list1, list2) {
  // Create a dummy head node and set the current pointer to it
  let dummyHead = new ListNode();
  let current = dummyHead;

  // Iterate through both linked lists while neither is null
  while (list1 !== null && list2 !== null) {
    // Compare the values of the current nodes
    if (list1.val < list2.val) {
      current.next = list1; // Link to the smaller node
      list1 = list1.next; // Move to the next node in list1
    } else {
      current.next = list2; // Link to the smaller node
      list2 = list2.next; // Move to the next node in list2
    }
    current = current.next; // Move the current pointer forward
  }

  // If one list is not empty, link the remaining nodes
  if (list1 !== null) {
    current.next = list1; // Attach the rest of list1
  } else {
    current.next = list2; // Attach the rest of list2
  }

  // Return the merged list, starting from the first node
  return dummyHead.next;
};

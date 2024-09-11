// Definition for singly-linked list node
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val; // Initialize the value of the node
  this.next = next === undefined ? null : next; // Initialize the next pointer
}

// Function to add two numbers represented by linked lists
var addTwoNumbers = function (l1, l2) {
  // Create a dummy head node to simplify the linked list construction
  let dummyHead = new ListNode(0);
  let current = dummyHead; // Pointer to the current node in the result list
  let carry = 0; // Variable to store the carry from the sum

  // Loop until both linked lists are exhausted and there is no carry left
  while (l1 || l2 || carry) {
    let sum = carry; // Start with the carry from the previous addition

    // If there is a node in l1, add its value to sum
    if (l1) {
      sum += l1.val; // Add the value of the current node in l1
      l1 = l1.next; // Move to the next node in l1
    }

    // If there is a node in l2, add its value to sum
    if (l2) {
      sum += l2.val; // Add the value of the current node in l2
      l2 = l2.next; // Move to the next node in l2
    }

    // Calculate the new carry for the next iteration
    carry = Math.floor(sum / 10); // If sum is 10 or more, carry will be 1
    // Create a new node with the value of sum modulo 10 (the last digit)
    current.next = new ListNode(sum % 10);
    current = current.next; // Move the current pointer to the new node
  }

  // Return the next node of dummyHead, which is the head of the resulting linked list
  return dummyHead.next;
};

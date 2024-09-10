# Linked List

## what is linked list?

A linked list is a way to store data in a computer. You can think of it as a chain of connected items, where each item (called a node) points to the next one. The first item points to the second item, the second item points to the third, and so on. The last item, however, points to null, indicating that there are no more items in the list
<br/>
In a linked list, each item is called a node. A node has two parts: the actual value (the data you want to store) and a pointer that refers to the next node in the linked list.

The first node in the linked list is called the head, which is essentially the start of the chain. The last node is referred to as the tail, and it points to nothing (technically, we say it points to null), indicating the end of the list
<br/>

## Linked Lists VS Arrays

Since arrays are one of the simplest and most common data structures, I’m going to compare them to linked lists. An array is essentially a list of items (just like a linked list), but unlike a linked list, arrays have indexes that allow you to access specific items directly.

In very simple terms, you can think of a linked list as an array where the items are scattered all over the place, but each item "remembers" its next item. This means that while arrays allow for quick access to any item using its index, linked lists require you to follow the pointers from one item to the next to find what you’re looking for

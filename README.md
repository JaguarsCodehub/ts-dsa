# Array Big O Time Complexity

- Insert / remove from end : O(1)
- Insert / remove from start : O(n)
- Access-O(1) {constant}
- Search-O(n) {linear time complexity as element can be any also the last element}
- Push / pop - O(1)
- Shift / Unshift / concat / slice / splice - O(n)
- forEach / map / filter / reduce - O(n)

# Stack

1. The stack data structure is a sequential collection of elements that follows the principle of Last In FIrst Out (LIFO)
2. The Last Element inserted into the stack is first element to be removed
3. Ex: A stack of plates, The last plate placed on top of the stack is also the first plate removed from the stack
4. The Stack data structure supports two main operations

   - Push: which adds an element to the collection
   - Pop: which removes the most recetly added element from collection

5. Stack Usage:
   - Browser history tracking
   - Undo operation when typing
   - Call stack in JS Runtime

# Queue

1. The queue data structure is a sequential collection of elements that follows FIrst In First Out (FIFO)
2. The first element inserted into the queue is first element to be removed
3. Ex: A queue of people, People enter the queue at one end (rear/tail) and leave the queue from the other end(front).
4. EnQueue - Remove elements from the end
5. DeQueue - Remove elements from the front of the queue
6. Peek - Retrieves the element infront of the queue without removing from Queue

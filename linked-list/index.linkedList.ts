class NodeT<T> {
  value: T;
  next: NodeT<T> | null;

  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: NodeT<T> | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

const list = new LinkedList<number>();
console.log('List is empty?', list.isEmpty());
console.log('List Size:', list.getSize());

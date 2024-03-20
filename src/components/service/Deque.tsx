class Deque<T> {
  private elements: T[];


  constructor(...items: T[]) {
    this.elements = items;
  }

  // Add element to the front of the deque
  addFront(item: T) {
    this.elements.unshift(item);
  }

  // Add element to the end of the deque
  addEnd(item: T) {
    this.elements.push(item);
  }

  // Remove and return element from the front of the deque
  removeFront(): T | undefined {
    return this.elements.shift();
  }

  // Remove and return element from the end of the deque
  removeEnd(): T | undefined {
    return this.elements.pop();
  }

  // Return true if deque is empty, false otherwise
  isEmpty(): boolean {
    return this.elements.length === 0;
  }

  // Return the size of the deque
  size(): number {
    return this.elements.length;
  }

  // Return the front element of the deque without removing it
  peekFront(): T {
    return this.elements[0];
  }

  // Return the end element of the deque without removing it
  peekEnd(): T {
    return this.elements[this.elements.length - 1];
  }

  // Return the internal array
  toArray(): T[] {
    return this.elements;
  }
}

export default Deque;

class DoublyLinkedListNode {
  value;
  next;
  prev;

  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}


class DoubyLinkedList {
  head;
  tail;
  lenght;

  constructor(value) {
    this.head = this.tail = new DoublyLinkedListNode(value, null, null);
    this.lenght = 1;
  }

  increaseIndex() {
    this.lenght++;
  }
  decreaseIndex() {
    this.lenght--;
  }

  get(index) {
    if (index >= this.lenght || index < 0) throw new Error("out of range");

    let node = this.head;
    if (index < this.lenght / 2) {
      node = this.head;
      for (let i = 0; i < index; i++) node = node.next;
    } else {
      node = this.tail;
      for (let i = this.lenght - 1; i > index; i--) node = node.prev;
    }

    return node;
  }

  set(value, index) {
    if (index >= this.lenght || index < 0) throw new Error("out of range");

    let node = this.get(index);
    node.value = value;

    return node;
  }

  unshift(value) {
    this.head = new DoublyLinkedListNode(value, this.head, null);
    this.increaseIndex();
    if (this.lenght === 1) this.tail = this.head;
    else this.head.next.prev = this.head;
  }

  // end of changes

  shift() {
    let deletedNode;
    if (this.lenght > 1) {
      deletedNode = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      deletedNode.next = null;
    } else if (this.lenght === 1) {
      deletedNode = this.head;
      this.head = this.tail = null;
    } else {
      throw new Error("list is empty");
    }
    this.decreaseIndex();
    return deletedNode;
  }

  insert(value, index) {
    if (index === this.lenght) return this.push(value);
    else if (index === 0) return this.unshift(value);
    let prevNode = this.get(index - 1); // to access previous item
    let nextNode = prevNode.next;
    prevNode.next = new DoublyLinkedListNode(value, nextNode, prevNode);
    nextNode.prev = prevNode.next;
    this.increaseIndex();
  }

  push(value) {
    if (!this.lenght === 0) {
      this.head = this.tail = new DoublyLinkedListNode(value, null, null);
    } else {
      this.tail.next = new DoublyLinkedListNode(value, null, this.tail);
      this.tail = this.tail.next;
    }
    this.increaseIndex();
  }

  pop() {
    let deletedNode;
    if (!this.lenght) return deletedNode;
    if (this.lenght === 1) {
      deletedNode = this.head;
      this.head = this.tail = null;
    } else {
      let prevNode = this.tail.prev;
      deletedNode = this.tail;
      this.tail = prevNode;
      prevNode.next = null;
      deletedNode.prev = null;
    }
    this.decreaseIndex();
    return deletedNode;
  }

  removeByValue(value) {
    if (this.lenght === 0) return null;
    if (this.head.value == value) return this.shift();
    if (this.tail.value == value) return this.pop();

    let prevNode = this.head;
    for (let i = 0; i < this.lenght; i++) {
      if (prevNode.next?.value === value) {
        let deletedNode = prevNode.next;
        prevNode.next = prevNode.next.next;
        prevNode.next.prev = prevNode;
        deletedNode.next = deletedNode.prev = null;
        this.decreaseIndex();
        return deletedNode;
      } else {
        prevNode = prevNode.next;
      }
    }
  }

  remove(index) {
    let deletedNode;
    if (this.lenght === 0 || this.lenght <= index) return null;
    else if (index === 0) return this.shift();
    else if (index === this.lenght - 1) return this.pop();
    else {
      let prevNode = this.get(index - 1);
      deletedNode = prevNode.next;
      prevNode.next = prevNode.next.next;
      prevNode.next.prev = prevNode;
      deletedNode.next = deletedNode.prev = null;
    }
    this.decreaseIndex();
    return deletedNode;
  }
}

module.exports = { DoublyLinkedListNode, DoubyLinkedList }
class LinkedListNode {
  value;
  next;

  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}


class LinkedList {
  head;
  tail;
  lenght;

  constructor(value) {
    this.head = this.tail = new LinkedListNode(value);
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
    for (let i = 0; i < index; i++) node = node.next;

    return node;
  }

  set(value, index) {
    if (index >= this.lenght || index < 0) throw new Error("out of range");

    let node = this.get(index);
    node.value = value;

    return node;
  }

  unshift(value) {
    this.head = new LinkedListNode(value, this.head);
    this.increaseIndex();
    if (this.lenght === 1) this.tail = this.head;
  }

  shift() {
    let deletedNode;
    if (this.lenght > 1) {
      deletedNode = this.head;
      this.head = this.head.next;
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
    let node = this.get(index - 1); // to access previous item
    node.next = new LinkedListNode(value, node.next);
    this.increaseIndex();
  }

  push(value) {
    if (!this.head) {
      this.head = this.tail = new LinkedListNode(value, null);
    } else {
      this.tail.next = new LinkedListNode(value, null);
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
      let node = this.get(this.lenght - 2);
      deletedNode = node.next;
      node.next = null;
      this.tail = node;
    }
    this.decreaseIndex();
    return deletedNode;
  }

  removeByValue(value) {
    if (this.lenght === 0) return null;
    if (this.head.value == value) return this.shift();
    if (this.tail.value == value) return this.pop();

    let node = this.head;
    for (let i = 0; i < this.lenght; i++) {
      if (node.next?.value === value) {
        let deletedNode = node.next;
        node.next = node.next.next;
        this.decreaseIndex();
        return deletedNode;
      } else {
        node = node.next;
      }
    }
  }

  remove(index) {
    let deletedNode;
    if (this.lenght === 0 || this.lenght <= index) {
      return null;
    }
    if (index === 0 && this.lenght === 1) {
      deletedNode = this.head;
      this.head = this.tail = null;
    } else if (index === 0) {
      deletedNode = this.head;
      this.head = this.head.next;
    } else {
      let prevNode = this.get(index - 1);
      deletedNode = prevNode.next;
      prevNode.next = prevNode.next.next;

      if (prevNode.next == null)
        // or index + 1 === this.lenght
        this.tail = prevNode;
    }
    this.decreaseIndex();
    return deletedNode;
  }
}

module.exports = { LinkedList, LinkedListNode };

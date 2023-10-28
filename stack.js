class StackNode {
  value;
  prev;

  constructor(value, prev) {
    this.value = value;
    this.prev = prev;
  }
}

class Stack {
  top;
  lenght;

  constructor(value) {
    this.top = new StackNode(value, undefined);
    this.lenght = 1;
  }

  push(value) {
    let newNode = new StackNode(value, this.top);
    this.top = newNode;
    this.lenght++;
    return this
  }

  pop() {
    let temp = this.top;
    if (this.lenght > 0) {
      this.top = this.top.prev;
      temp.prev = undefined;
      this.lenght--;
    }
    return temp
  }
}

module.exports = { StackNode, Stack };
const { LinkedList, LinkedListNode } = require("./linked-list");
const { test, expect } = require("./simple-test-lib");

// test case
function linkedListTest () {
  let list = new LinkedList(2);
  test("head and tail must be truthy", () => {
    expect(list.head).toBeTruthy();
    expect(list.tail).toBeTruthy();
  });
  test("head and tail value must be 2", () => {
    expect(list.head.value).toBe(2);
    expect(list.tail.value).toBe(2);
  });

  list.unshift(1);
  console.log("unshift(1)");
  test("list length must be 2", () => {
    expect(list.lenght).toBe(2);
  });
  test("1st item value must be 1", () => {
    expect(list.get(0).value).toBe(1);
  });

  list.push(3);
  console.log("push(3)");
  test("list length must be 3", () => {
    expect(list.lenght).toBe(3);
  });
  test("last item value must be 3", () => {
    expect(list.get(2).value).toBe(3);
  });

  list.insert(1.5, 1);
  console.log("insert(1.5, 1)");
  test("list length must be 4", () => {
    expect(list.lenght).toBe(4);
  });
  test("2nd item value must be 1.5", () => {
    expect(list.get(1).value).toBe(1.5);
  });

  list.removeByValue(1.5);
  console.log("removeByValue(1.5)");
  test("list length must be 3", () => {
    expect(list.lenght).toBe(3);
  });

  let popedNode = list.pop();
  console.log("pop()");
  test("list length must be 2", () => {
    expect(list.lenght).toBe(2);
  });
  test("poped item value must be 3", () => {
    expect(popedNode.value).toBe(3);
  });

  let shiftedNode = list.shift();
  console.log("shift()");
  test("list length must be 1", () => {
    expect(list.lenght).toBe(1);
  });
  test("shifted item value must be 1", () => {
    expect(shiftedNode.value).toBe(1);
  });

  let deleteByIndexNode = list.remove(0);
  console.log("remove()");
  test("list length must be 0", () => {
    expect(list.lenght).toBe(0);
  });
  test("shifted item value must be 2", () => {
    expect(deleteByIndexNode.value).toBe(2);
  });
}

module.exports = { linkedListTest }

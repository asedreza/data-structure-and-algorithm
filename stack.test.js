const { StackNode, Stack } = require('./stack');
const { test, expect } = require("./simple-test-lib");


function stackTest() {
  let stack = new Stack(1);

  test('1. stack constroctor must work properly', () => {
    expect(stack.lenght).toBe(1)
    expect(stack.top.value).toBe(1)
  })

  test('2. stack push must work properly', () => {
    stack.push(2);
    expect(stack.lenght).toBe(2)
    expect(stack.top.value).toBe(2)
  })
  
  test('3. stack pop must work properly', () => {
    let temp = stack.pop();
    expect(stack.lenght).toBe(1)
    expect(stack.top.value).toBe(1)
    expect(temp.value).toBe(2)
  })
}

module.exports = { stackTest };
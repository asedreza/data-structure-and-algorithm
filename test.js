const { stackTest } = require('./stack.test');
const { linkedListTest } = require('./linked-list.test');

console.log(`\x1b[47m ------------------------- Stack Tests ------------------------- \x1b[0m`)
stackTest();
console.log()


console.log(`\x1b[47m ------------------------- Linked List Tests ------------------------- \x1b[0m`)
linkedListTest();
console.log()
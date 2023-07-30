class LinkedList {
    head
    tail
    lenght

    constructor(value) {
        this.head = this.tail = new LinkedListNode(value);
        this.lenght = 1;
    }

    increaseIndex() { this.lenght++; }
    decreaseIndex() { this.lenght--; }

    getByIndex(index) {
        if (index >= this.lenght)
            throw new Error('out of range')

        let node = this.head;
        for (let i = 0; i < index; i++)
            node = node.next;

        return node;
    }

    unshift(value) {
        this.head = new LinkedListNode(value, this.head)
        this.increaseIndex();
    }

    shift() {
        if (this.lenght > 1) {
            let deletedNode = this.head;
            this.head = this.head.next;
            this.decreaseIndex();
            return deletedNode;
        } else if (this.lenght) {
            this.head = this.tail = nul
            this.decreaseIndex();
        } else
            throw new Error('list is empty')
    }

    insert(value, index) {
        let node = this.getByIndex(index - 1); // to access previous item
        node.next = new LinkedListNode(value, node.next);
        if ((index + 1) === this.lenght)
            this.tail = node.next;
        this.increaseIndex();
    }

    push(value) {
        let node = this.getByIndex(this.lenght - 1);// to access last item
        node.next = new LinkedListNode(value, null);
        this.tail = node.next;
        this.increaseIndex();
    }

    pop() {
        let node = this.getByIndex(this.lenght - 2);
        let deletedNode = node.next;
        node.next = null;
        this.tail = node;
        this.decreaseIndex();
        return deletedNode
    }


    delete(value) {
        if (this.head.value == value) {
            let deletedNode = node.next;
            this.head = this.head.next;
            this.decreaseIndex();
            return deletedNode;
        }
        let node = this.head;
        for (let i = 0; i < this.lenght; i++) {
            if (node.next?.value === value) {
                let deletedNode = node.next;
                node.next = node.next.next;

                if (i === (this.lenght - 1))
                    this.tail = node;

                this.decreaseIndex();
                return deletedNode
            } else {
                node = node.next;
            }
        }
    }

    deleteByIndex(value) { }
}

class LinkedListNode {
    value
    next
    // before

    constructor(value, next) {
        this.value = value;
        this.next = next;
        // this.before = null;
    }
}
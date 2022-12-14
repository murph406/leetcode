export class LinkedList {
    constructor(head = null) {
        this.head = head
    }

    size() {
        let count = 0;
        let node = this.head;

        while (node) {
            count++;
            node = node.next
        }

        return count;
    }

    getLast() {
        let lastNode = this.head;

        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }

        return lastNode
    }

    getFirst() {
        return this.head;
    }

    clear() {
        this.head = null;
    }
}

export class ListNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
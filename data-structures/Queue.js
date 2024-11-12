/**
 *  Queues Notes
 *  Linear Data Structure
 *  FIFO - First In First Out
 *  Methods
 *      lookup O(n)
 *      enqueue O(1)
 *      dequeue O(1)
 *      peek O(1)
 *
 *  Would it be better to use an Array or a Linked List?
 *      You should only use Linked Lists - you never want to use an array.
 */
const Node = require("./Node");

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        let newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
        if (this.size === 0) {
            return null;
        }
        let temp = this.first;
        if (this.size === 1) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.val;
    }
}

let newQueue = new Queue()
console.log('We are pushing the value 1 in our Queue. Number of items in our Queue:', newQueue.enqueue(1));
console.log('We are pushing the value 6 in our Queue. Number of items in our Queue:', newQueue.enqueue(6));
console.log('We are pushing the value 8 in our Queue. Number of items in our Queue:', newQueue.enqueue(8));
console.log('We are pushing the value 3 in our Queue. Number of items in our Queue: ', newQueue.enqueue(3));
console.log('Here is our current Queue: ', newQueue);
console.log('We are popping the following value from our Queue: ', newQueue.dequeue());
console.log('We are popping the following value from our Queue: ', newQueue.dequeue());
console.log('We are popping the following value from our Queue: ', newQueue.dequeue());
console.log('We are popping the following value from our Queue: ', newQueue.dequeue());
console.log('Here is our current Queue: ', newQueue);
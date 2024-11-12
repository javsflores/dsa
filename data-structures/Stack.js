const Node = require('./Node');

/**
 * Stacks Notes
 *
 * What is a stack?
 *      LIFO - Last In First Out
 *          How is it used?
 *              This about a stack of plates, or a stack of markers, or a stack of... anything. As you pile it up the
 *              last thing (or the topmost thing) is what gets removed first.
 *
 * Methods
 *      lookup O(n)
 *      pop O(1)
 *      push O(1)
 *      peek O(1)
 *
 *  We can think of it as browser history:
 *      sites in order you visit them
 *       [
 *          udemy - 1st visit
 *          youtube - 2nd visit
 *          google - 3rd visit
 *      ]
 *
 *      if you go back it goes to:
 *      [
 *          udemy
 *          youtube
 *      ]
 *
 *      Would it be better to use an Array or a Linked List?
 *          You could use either
 */
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
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
let newStack = new Stack()
console.log('We are pushing the value 1 in our stack. Number of items in our Stack:', newStack.push(1));
console.log('We are pushing the value 6 in our stack. Number of items in our Stack:', newStack.push(6));
console.log('We are pushing the value 8 in our stack. Number of items in our Stack:', newStack.push(8));
console.log('We are pushing the value 3 in our stack. Number of items in our Stack: ', newStack.push(3));
console.log('Here is our current stack: ', newStack);
console.log('We are popping the following value from our stack: ', newStack.pop());
console.log('We are popping the following value from our stack: ', newStack.pop());
console.log('We are popping the following value from our stack: ', newStack.pop());
console.log('We are popping the following value from our stack: ', newStack.pop());
console.log('Here is our current stack: ', newStack);
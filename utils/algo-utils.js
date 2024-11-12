const SinglyLinkedList = require('../data-structures/SinglyLinkedList');

function createSinglyLinkedList(items) {
    let singlyLinkedList = new SinglyLinkedList();
    for (let i = 0; i < items.length; i++) {
        singlyLinkedList.push(items[i]);
    }
    return singlyLinkedList;
}

function toArrayFromNode(node) {
    let arrayFromNode = [];
    while(node) {
        arrayFromNode.push(node.val);
        node = node.next;
    }
    return arrayFromNode;
}

module.exports = {
    createSinglyLinkedList,
    toArrayFromNode,
}
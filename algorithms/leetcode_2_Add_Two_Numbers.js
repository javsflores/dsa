const ListNode = require('../data-structures/Node');
const { createSinglyLinkedList, toArrayFromNode } = require('../utils/algo-utils');
/**
 * 2. Add Two Numbers
 *  Difficulty Level: Medium
 *  Url: https://leetcode.com/problems/add-two-numbers/description/
 *
 *      You are given two non-empty linked lists representing two non-negative integers. The digits are stored in
 *      reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a
 *      linked list.
 *
 *      You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 *      Example 1:
 *      Input: l1 = [2,4,3], l2 = [5,6,4]
 *      Output: [7,0,8]
 *      Explanation: 342 + 465 = 807.
 *
 *      Example 2:
 *      Input: l1 = [0], l2 = [0]
 *      Output: [0]
 *
 *      Example 3:
 *      Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 *      Output: [8,9,9,9,0,0,0,1]
 *
 *
 *   Definition for singly-linked list.
 *   function ListNode(val, next) {
 *       this.val = (val===undefined ? 0 : val)
 *       this.next = (next===undefined ? null : next)
 *   }
 *
 *   @param {ListNode} l1
 *   @param {ListNode} l2
 *   @return {ListNode}
 */
let addTwoNumbers = function(l1, l2) {
    let headOfList = null;
    let sumList = null;
    let carryOverValue = 0;
    while(l1 || l2 || carryOverValue) {
        let listOneValue = l1 !== null ? l1.val : 0;
        let listTwoValue = l2 !== null ? l2.val : 0;
        let sumBothValues = listOneValue + listTwoValue;
        if (carryOverValue > 0) {
            sumBothValues++;
            carryOverValue--;
        }
        if (sumBothValues >= 10) {
            sumBothValues -= 10;
            carryOverValue++;
        }
        let newNode = new ListNode(sumBothValues);
        if (sumList === null) {
            headOfList = newNode;
            sumList = newNode;
        } else {
            sumList.next = newNode;
            sumList = sumList.next;
        }
        l1 = l1 !== null ? l1.next : null;
        l2 = l2 !== null ? l2.next : null;
    }

    return headOfList;
};

let listOne = createSinglyLinkedList([2,4,3]);
let listTwo = createSinglyLinkedList([5,6,4]);
console.log(toArrayFromNode(addTwoNumbers(listOne.head, listTwo.head))); // [7, 0, 4]

listOne = createSinglyLinkedList([0]);
listTwo = createSinglyLinkedList([0]);
console.log(toArrayFromNode(addTwoNumbers(listOne.head, listTwo.head))); // [0]

listOne = createSinglyLinkedList([9,9,9,9,9,9,9]);
listTwo = createSinglyLinkedList([9,9,9,9]);
console.log(toArrayFromNode(addTwoNumbers(listOne.head, listTwo.head))); // [8,9,9,9,0,0,0,1]
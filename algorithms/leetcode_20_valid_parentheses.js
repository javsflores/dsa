const Stack = require('../data-structures/Stack');
/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 * Every close bracket has a corresponding open bracket of the same type.
 *
 * Time Complexity = O(N) - We only have to iterate of 's' once
 * Space Complexity = O(N) - As 's' increases, so does 'charStack'
 *
 * @param s
 * @returns {boolean}
 */
let isValid = function(s) {
    let charStack = new Stack();
    let pairDictionary = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            charStack.push(s[i]);
        } else {
            let expectedChar = charStack.pop();
            if (pairDictionary[s[i]] !== expectedChar) {
                return false;
            }
        }
    }
    return charStack.size === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([])")); // true
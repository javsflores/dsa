const Stack = require('../data-structures/Stack');

// Time Complexity = O(N) - We only have to iterate of 's' once
// Space Complexity = O(N) - As 's' increases, so does 'charStack'
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
            let lastCharPushed = charStack.pop();
            if (pairDictionary[s[i]] !== lastCharPushed) {
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
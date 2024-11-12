/**
 * 1249. Minimum Remove to Make Valid Parentheses
 *  Difficult Level: Medium
 *  Url: https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/description/
 *
 *      Given a string s of '(' , ')' and lowercase English characters.
 *
 *      Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.
 *
 *      Formally, a parentheses string is valid if and only if:
 *
 *      It is the empty string, contains only lowercase characters, or
 *      It can be written as AB (A concatenated with B), where A and B are valid strings, or
 *      It can be written as (A), where A is a valid string.
 *
 *
 *      Example 1:
 *
 *      Input: s = "lee(t(c)o)de)"
 *      Output: "lee(t(c)o)de"
 *      Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
 *      Example 2:
 *
 *      Input: s = "a)b(c)d"
 *      Output: "ab(c)d"
 *      Example 3:
 *
 *      Input: s = "))(("
 *      Output: ""
 *      Explanation: An empty string is also valid.
 *
 *      @param {string} s
 *      @return {string}
 */
let minRemoveToMakeValid = function(s) {
    // This is the optimized solution
    // Time Complexity O(N)
    // Space Complexity O(N)
    let parenStack = [];
    let stringArray = s.split('');
    let counter = 0
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i] === '(') {
            parenStack.push(i);
        } else if (stringArray[i] === ')') {
            if (parenStack.length === 0) {
                stringArray[i] = "";
            } else {
                parenStack.pop();
            }
        }
    }

    for (let j = 0; j < parenStack.length; j++) {
        stringArray[parenStack[j]] = "";
    }

    return stringArray.join('');
};

console.log(minRemoveToMakeValid("lee(t(c)o)de)"));
console.log(minRemoveToMakeValid("a)b(c)d"));
console.log(minRemoveToMakeValid("))(("));
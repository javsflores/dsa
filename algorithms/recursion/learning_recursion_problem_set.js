// Practice problem while doing JavaScript Algorithms and Data Structures Masterclass on UDemy
function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}
console.log('sumRange:', sumRange(1000));

function factorial(num) {
    if (num === 2) return 2;
    return num * factorial(num - 1);
}
console.log('factorial:', factorial(5));

// Below are two ways to solve the same issue:
// Helper Method Recursion
function collectOddValuesHelperMethodRecursion(arr){
    let result = [];
    function helper(helperInput){
        if(helperInput.length === 0) return;
        if(helperInput[0] % 2 !== 0) result.push(helperInput[0])
        helper(helperInput.slice(1))
    }
    helper(arr)
    return result;
}
console.log('collectOddValuesHelperMethodRecursion:', collectOddValuesHelperMethodRecursion([1,2,3,4,5,6,7,8,9]));
// Pure Recursion
function collectOddValuesPureRecursion(arr){
    let newArr = [];
    if(arr.length === 0) return newArr;
    if(arr[0] % 2 !== 0) newArr.push(arr[0]);
    newArr = newArr.concat(collectOddValuesPureRecursion(arr.slice(1)));
    return newArr;
}
console.log('collectOddValuesPureRecursion:', collectOddValuesPureRecursion([1,2,3,4,5,6,7,8,9]));

function productOfArray(nums) {
    if (!nums.length) {
        return 1;
    }
    return nums.pop() * productOfArray(nums);
}
console.log('productOfArray:', productOfArray([1,2,3,10]));

function reverse(string, currentStringIndex = string.length - 1) {
    if (currentStringIndex < 0) return '';
    return string[currentStringIndex] + reverse(string, currentStringIndex - 1);
}
console.log('reverse: abcdefghijklmnopqrstuvwxyz solution:', reverse('abcdefghijklmnopqrstuvwxyz'));

function isPalindrome(string, startingIndex = 0, endingIndex = string.length - 1) {
    if(endingIndex < 0 && startingIndex === string.length) return true;
    if (string[startingIndex] !== string[endingIndex]) return false;
    return isPalindrome(string, startingIndex + 1, endingIndex - 1);
}
console.log('isPalindrome: abcdefghijklmnopqrstuvwxyz -', isPalindrome('abcdefghijklmnopqrstuvwxyz'));
console.log('isPalindrome: racecar -', isPalindrome('racecar'));

function flatten(array) {
    let flattenArray = [];
    let currentIndex = 0;
    while(currentIndex < array.length) {
        let currentValue = array[currentIndex]
        if (Array.isArray(currentValue)) {
            flattenArray = flattenArray.concat(flatten(currentValue));
            currentIndex++;
        } else {
            flattenArray.push(currentValue);
            currentIndex++;
        }
    }
    return flattenArray;
}
console.log('flatten: [1, 2, 3] solution:', flatten([1, 2, 3]));
console.log('flatten: [1, 2, 3, [4, 5]] solution:', flatten([1, 2, 3, [4, 5]]));
console.log('flatten: [1, [2, [3, 4], [[5]]]] solution:', flatten([1, [2, [3, 4], [[5]]]]));
console.log('flatten: [[1],[2],[3]] solution:', flatten([[1],[2],[3]]));
console.log('flatten: [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]] solution:', flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
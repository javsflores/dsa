// Practice problem while doing JavaScript Algorithms and Data Structures Masterclass on UDemy
function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}
console.log(sumRange(1000));

function factorial(num) {
    if (num === 2) return 2;
    return num * factorial(num - 1);
}
console.log(factorial(5));

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
console.log(collectOddValuesHelperMethodRecursion([1,2,3,4,5,6,7,8,9]));
// Pure Recursion
function collectOddValuesPureRecursion(arr){
    let newArr = [];
    if(arr.length === 0) return newArr;
    if(arr[0] % 2 !== 0) newArr.push(arr[0]);
    newArr = newArr.concat(collectOddValuesPureRecursion(arr.slice(1)));
    return newArr;
}
console.log(collectOddValuesPureRecursion([1,2,3,4,5,6,7,8,9]));

function productOfArray(nums) {
    if (!nums.length) {
        return 1;
    }
    return nums.pop() * productOfArray(nums);
}

console.log('product of Array: ', productOfArray([1,2,3,10]));
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
console.log(factorial(4));
function selection_sort(array) {
    let length = array.length;
    for (let i = 0; i < length; i++) {
        let lowestNumberIndex = i;
        let temp = array[i];
        for (let j = i; j < length; j++) {
            if (array[j] < array[lowestNumberIndex]) {
                lowestNumberIndex = j;
            }
        }
        array[i] = array[lowestNumberIndex];
        array[lowestNumberIndex] = temp;
    }
}

// let numbers =  [1, 2, 3, 4, 5, 7, 6, 8, 9, 10]; // Mostly Sorted
// let numbers =  [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]; // Reversed
let numbers =  [1, 5, 9, 7, 6, 4, 2, 3, 10, 8]; // Random
selection_sort(numbers);
console.log(numbers);
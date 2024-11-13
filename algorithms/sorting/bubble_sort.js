function bubble_sort(array) {
    // Self implementation by how Bubble Sort was described
    let needToRerun = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            let currentItem = array[i];
            array[i] = array[i+1];
            array[i + 1] = currentItem;
            needToRerun = true;
        }
        if (i === array.length - 1 && needToRerun) {
            i = -1;
            needToRerun = false;
        }
    }

    // Implementation by instructor --- I think you could have an exit strategy to mark when you're done sorting early
    // const length = array.length;
    // for (let i = 0; i < length; i++) {
    //     for (let j = 0; j < length; j++) {
    //         if(array[j] > array[j+1]) {
    //             let temp = array[i];
    //             array[j] = array[j + 1];
    //             array[j+1] = temp;
    //         }
    //     }
    // }
}


// let numbers =  [1, 2, 3, 4, 5, 7, 6, 8, 9, 10]; // Mostly Sorted
// let numbers =  [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]; // Reversed
let numbers =  [1, 5, 9, 7, 6, 4, 2, 3, 10, 8]; // Random
bubble_sort(numbers);
console.log(numbers);
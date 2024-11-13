function bubbleSort(array) {
    let counter = 0;
    let needToRerun = false;
    for (let i = 0; i < array.length; i++) {
        counter++;
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

    // const length = array.length;
    // for (let i = 0; i < length; i++) {
    //     for (let j = 0; j < length; j++) {
    //         counter++;
    //         if(array[j] > array[j+1]) {
    //             let temp = array[i];
    //             array[j] = array[j + 1];
    //             array[j+1] = temp;
    //         }
    //     }
    // }
    console.log(counter);
}

// bubbleSort([1,3,2]);
// bubbleSort([1,3,4,5,7,6,8,9,10]); // Mostly Sorted
// bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]); // Reversed
bubbleSort([1,5,9,7,6,4,2,3,10,8]) // Random
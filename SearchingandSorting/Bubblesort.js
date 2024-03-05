

//TODO:  Bubble Sort


function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

function main() {
    const T = parseInt(readLine()); // Number of test cases

    for (let t = 0; t < T; t++) {
        const N = parseInt(readLine()); // Size of the array
        const arr = readLine().trim().split(' ').map(Number); // Input array

        // Call the bubble sort function
        const sortedArr = bubbleSort(arr);

        // Log the sorted array
        console.log(sortedArr.join(' '));
    }
}
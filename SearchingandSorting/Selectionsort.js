

//TODO:  Selection Sort


function selectionSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the minimum element with the first element of the unsorted part
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

function main() {
    const T = parseInt(readLine()); // Number of test cases

    for (let t = 0; t < T; t++) {
        const N = parseInt(readLine()); // Size of the array
        const arr = readLine().trim().split(' ').map(Number); // Input array

        // Call the selection sort function
        const sortedArr = selectionSort(arr);

        // Log the sorted array
        console.log(sortedArr.join(' '));
    }
}
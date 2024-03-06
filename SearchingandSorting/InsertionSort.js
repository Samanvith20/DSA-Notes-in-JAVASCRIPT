

//TODO: INSERTION SORT


// Define a function named insertionSort which takes an array as input
function insertionSort(arr) {
     
    // Get the length of the array
    const n = arr.length;
    
    // Outer loop: Iterate through each element of the array except the first one
    for (let i = 0; i <= n - 1; i++) {
        let j = i; // Set j to the current index i
        
        // Inner loop: Iterate backwards from the current index to the beginning of the array
        // and move the current element to its correct position in the sorted subarray
        while (j > 0 && arr[j - 1] > arr[j]) {
            // Swap elements if the previous element is greater than the current element
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
            j--; // Move to the previous index
        }
    }
    
    // Return the sorted array
    return arr;
}

// Example usage:
const arrayToSort = [64, 25, 12, 22, 11];
console.log("Original Array:", arrayToSort);
const sortedArray = insertionSort(arrayToSort);
console.log("Sorted Array:", sortedArray);

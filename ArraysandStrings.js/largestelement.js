

//TODO: Largest Element in the Array



function findLargestElement(n, arr) {
    // Initialize the maximum element as the first element of the array
    let maxElement = arr[0];

    // Iterate through the array starting from the second element
    for (let i = 1; i < n; i++) {
        // Update the maximum element if the current element is greater
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }

    return maxElement;
}

// Example usage:
const n1 = 5;
const arr1 = [1, 2, 3, 4, 5];
console.log(findLargestElement(n1, arr1)); // Output: 5

const n2 = 8;
const arr2 = [5, 9, 3, 4, 8, 4, 3, 10];
console.log(findLargestElement(n2, arr2)); // Output: 10

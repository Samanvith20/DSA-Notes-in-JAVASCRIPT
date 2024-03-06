

//TODO:  BINARY SEARCH FOR GIVEN ELEMENTS 

  // used for the sorted elements

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        // Find the middle index of the current search interval
        let mid = Math.floor((low + high) / 2);

        // If the middle element is equal to the target, return its index
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            // If the target is greater than the middle element, search the right half
            low = mid + 1;
        } else {
            // If the target is smaller than the middle element, search the left half
            high = mid - 1;
        }
    }

    // If the target element is not found, return -1
    return -1;
}

// Example usage:
const arrayToSearch = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const targetElement = 11;
const index = binarySearch(arrayToSearch, targetElement);

if (index !== -1) {
    console.log(`Element ${targetElement} found at index ${index}.`);
} else {
    console.log(`Element ${targetElement} not found in the array.`);
}

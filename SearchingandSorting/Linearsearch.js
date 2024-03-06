
// HINT: Iterate over each element in the array 
function linearSearch(arr, target) {
    const n = arr.length;
    // Iterate through each element of the array
    for (let i = 0; i < n; i++) {
        // If the current element is equal to the target, return its index
        if (arr[i] === target) {
            return i;
        }
    }
    // If the target element is not found, return -1
    return -1;
}

// Example usage:
const arrayToSearch = [5, 8, 2, 6, 1, 9, 3];
const targetElement = 6;
const index = linearSearch(arrayToSearch, targetElement);

if (index !== -1) {
    console.log(`Element ${targetElement} found at index ${index}.`);
} else {
    console.log(`Element ${targetElement} not found in the array.`);
}

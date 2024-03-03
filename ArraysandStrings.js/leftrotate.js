

//TODO: Left Rotate an Array by One


// Problem statement
// Given an array 'arr' containing 'n' elements, rotate this array left once and return it.



// Rotating the array left by one means shifting all elements by one place to the left and moving the first element to the last position in the array.

//HINT: you simply need to move the first element to the end of the array 


function leftRotateArrayByOne(n, arr) {
    const firstElement = arr[0];
    for (let i = 1; i < n; i++) {
        arr[i - 1] = arr[i];
    }
    arr[n - 1] = firstElement;
    return arr;
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
console.log(leftRotateArrayByOne(5, arr1)); // Output: [2, 3, 4, 5, 1]

const arr2 = [5, 7, 3, 2];
console.log(leftRotateArrayByOne(4, arr2)); // Output: [7, 3, 2, 5]

const arr3 = [4, 0, 3, 2, 5];
console.log(leftRotateArrayByOne(5, arr3)); // Output: [0, 3, 2, 5, 4]

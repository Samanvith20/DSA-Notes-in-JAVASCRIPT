function secondLargest(a, n) {
    let largest = a[0];
    let secondLargest = -1; // Initialize second largest to a value not present in the array
    for (let i = 0; i < n; i++) {
        if (a[i] > largest) {
            secondLargest = largest; // Update second largest if a greater element is found
            largest = a[i]; // Update largest
        } else if (a[i] < largest && a[i] > secondLargest) {
            secondLargest = a[i]; // Update second largest if a smaller element than largest is found
        }
    }
    return secondLargest;
}

function secondSmallest(a, n) {
    let smallest = a[0];
    let secondSmallest = Number.MAX_SAFE_INTEGER; // Initialize second smallest to a value not present in the array
    for (let i = 0; i < n; i++) {
        if (a[i] < smallest) {
            secondSmallest = smallest; // Update second smallest if a smaller element is found
            smallest = a[i]; // Update smallest
        } else if (a[i] > smallest && a[i] < secondSmallest) {
            secondSmallest = a[i]; // Update second smallest if a greater element than smallest is found
        }
    }
    return secondSmallest;
}

function getSecondOrderElements(n, a) {
    const secondLargestVal = secondLargest(a, n);
    const secondSmallestVal = secondSmallest(a, n);
    return [secondLargestVal, secondSmallestVal];
}

// Example usage:
const n = 5;
const a = [4, 5, 3, 6, 7];
console.log(getSecondOrderElements(n, a));  // Output: [6, 4]

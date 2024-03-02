

// Topic: Largest of 3 numbers

//Question: Write a program that takes three numbers a,b, and c as input and prints the largest number amongst them.


function main() {
    // Reading input numbers
    let first_number = parseInt(readLine());
    let second_number = parseInt(readLine());
    let third_number = parseInt(readLine());
    
    // Call the function to find the largest number
    let largest = findLargestNumber(first_number, second_number, third_number);
    
    // Printing the result
    console.log(largest);
}

function findLargestNumber(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

// Another way

function findLargestNumber(a, b, c) {
    return Math.max(a, b, c);
}

// Sample Input
let a = -4, b = 0, c = 5;

// Finding the largest number
let largestNumber = findLargestNumber(a, b, c);

// Printing the result
console.log(largestNumber);

// Function to count the number of digits of 'n' that evenly divide 'n'
function countDivisibleDigits(n) {
    let count = 0; // Initialize count to 0 to keep track of the number of divisible digits
    let temp = n; // Store a temporary copy of 'n' to iterate through its digits
    while (temp > 0) { // Loop until all digits of 'n' are processed
        const digit = temp % 10; // Extract the last digit of 'temp'
        if (digit !== 0 && n % digit === 0) { // Check if the digit is not zero and divides 'n' evenly
            count++; // Increment count if the condition is true
        }
        temp = Math.floor(temp / 10); // Remove the last digit from 'temp'
    }
    return count; // Return the count of divisible digits
}

// Example usage:
const n = 336;
console.log(countDivisibleDigits(n)); // Output: 3



//TODO: Sum of even & odd


// Problem statement
// Write a program to input an integer 'n' and print the sum of all its even digits and the sum of all its odd digits separately.



function sumOfEvenOdd(n) {
    let evenSum = 0;
    let oddSum = 0;

    // Convert the number to a string to iterate through its digits
    let numString = n.toString();

    // Loop through each digit of the number
    for (let i = 0; i < numString.length; i++) {
        let digit = parseInt(numString[i]);

        // Check if the digit is even or odd
        if (digit % 2 === 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }

    return `${evenSum} ${oddSum}`;
}

console.log(sumOfEvenOdd(132456)); // Expected Output: "12 9"







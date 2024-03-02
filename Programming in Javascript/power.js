

// TODO : Find power of a number
 
// Problem statement
// Write a program to find x to the power n (i.e., x^n). Take x and n from the user. You need to print the answer.

// Note: For this question, you can assume that 0 raised to the power of 0 is 1

function main() {
    let x = parseInt(readLine());
    console.log("Value of x:", x); // Log x to verify
    let n = parseInt(readLine());
    console.log("Value of n:", n); // Log n to verify
    let result = power(x, n);
    console.log("Result:", result); // Log result to verify
    console.log(result);
}
function power(x, n) {
    if (n === 0) {
        return 1;
    }
    let result = 1;
    for (let i = 0; i < n; i++) {
        result = result * x;
    }
    return result;
}
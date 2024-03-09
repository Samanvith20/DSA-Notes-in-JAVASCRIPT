
//TODO:  Factorial of a Number


// Problem statement
// Write a program to find the factorial of a number.

// Factorial of n is:

// n! = n * (n-1) * (n-2) * (n-3)....* 1

// Output the factorial of 'n'. If it does not exist, output 'Error'. 



function fact(n) {
    // If n is negative, return 'Error'
    if (n < 0) {
        return 'Error';
    }
    
    // If n is 0, factorial is 1
    if (n === 0) {
        return 1;
    }
    
    // Initialize the result variable
    let result = 1;
    
    // Calculate factorial using a loop
    for (let i = n; i >= 1; i--) {
        result *= i;
       
    }
    
    return result;
}



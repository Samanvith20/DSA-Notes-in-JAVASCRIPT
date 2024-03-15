function isPrime(n) {
    let count = 0;
    
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }
    }
    
    if (count === 2) {
        return true;  // It's a prime number
    } else {
        return false; // It's not a prime number
    }
}

// Example usage:
console.log(isPrime(5));  // Output: true
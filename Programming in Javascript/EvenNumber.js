

// Topic:  Sum of Even Numbers till N

// Problem statement : Given a number N, print sum of all even numbers from 1 to N

function main() {
    let N = parseInt(readLine()); // Reading input N

    // Calculate the sum of even numbers
    let result = sumOfEvenNumbers(N);

    // Printing the result
    console.log(result);
}

function sumOfEvenNumbers(N) {
    let sum = 0;
    for (let i = 2; i <= N; i += 2) {
        sum += i;
    }
    return sum;
}


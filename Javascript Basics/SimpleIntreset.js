

// problem : Take the principal amount, rate of interest, and the time period as input and calculate the Simple Interest.

//Note: Return answer as Floor integer value.
  

// code
function main() {
    
    const principal = parseInt(readLine()); // Read principal amount as an integer
    const rate = parseFloat(readLine()); // Read rate of interest as a floating-point number
    const time = parseInt(readLine()); // Read time period as an integer

    // Calculate Simple Interest
    const simpleInterest = Math.floor((principal * rate * time) / 100);

    
    console.log(simpleInterest); // Output the Simple Interest as a floor integer value
}

// Boilerplate code for handling input
process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = "";
let input_stdin_array = "";
let input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}
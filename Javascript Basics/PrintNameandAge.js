

//problem : Take the person's name and age as input and print out the name and age as specified in the output format.

//code
function main() {
    // Reading input from stdin
    const name = readLine().trim();
    const age = parseInt(readLine().trim());
       // parseInt() is a function that parses a string argument and returns an integer. 
    // Output format
    console.log(`The name of the person is ${name} and the age is ${age}.`);
}
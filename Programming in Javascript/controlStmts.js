

// Topic : Find Character Case
//   Question: Problem statement
// Write a program that takes a character as input and prints 1, 0, or -1 according to the following rules.



// 1, if the character is an uppercase alphabet (A - Z).
// 0, if the character is a lowercase alphabet (a - z).
// -1, if the character is not an alphabet.


function checkCharacterType(character) {
    if (character >= 'A' && character <= 'Z') {
        return 1; // Uppercase alphabet
    } else if (character >= 'a' && character <= 'z') {
        return 0; // Lowercase alphabet
    } else {
        return -1; // Not an alphabet
    }
}
function main() {
    let character = readLine(); // Reading the input character
    
    let result = checkCharacterType(character);
    
    console.log(result); // Printing the result
}


//TODO: Convert String
  
// You are given a string 'STR'. You have to convert the first alphabet of each word in a string to UPPER CASE.

// For example:

// If the given string 'STR' = ”I am a student of the third year” so you have to transform this string to ”I Am A Student Of The Third Year"



function main() {
    let T = parseInt(readLine()); // Number of test cases
   console.log("The Test Cases is:",T);
    for (let i = 0; i < T; i++) {
        let str = readLine().trim(); // Input string
        let result = capitalizeFirstLetter(str);
        console.log(result);
    }
}

function capitalizeFirstLetter(str) {
    // Split the string into an array of words
    let words = str.split(" ");
    console.log("Word is:",words)    // Capitalize the first alphabet of each word
    let capitalizedWords = words.map(word => {
        if (word.length > 0) {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        } else {
            return word;
        }
    });
    
    // Join the modified words back together
    let result = capitalizedWords.join(" ");
    
    return result;
}
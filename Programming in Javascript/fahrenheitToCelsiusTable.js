

// TOPIC:  Fahrenheit to Celsius


// problem Stmt: Problem statement
//Given three values - Start Fahrenheit Value (S), End Fahrenheit value (E), and Step Size (W), you need to convert all Fahrenheit values from Start to End at the gap of W into their corresponding Celsius values and print the table.

// FORMULA:C=5/9(F-32)

function main() {
    let S = parseInt(readLine());
    let E = parseInt(readLine());
    let W = parseInt(readLine());

    // Print Fahrenheit to Celsius conversion table
    printFahrenheitToCelsius(S, E, W);
}

function printFahrenheitToCelsius(S, E, W) {
    for (let F = S; F <= E; F += W) {
        let C = (5/9) * (F - 32);
        // Print Fahrenheit and Celsius with floor or ceil as necessary
        if (C >= 0) {
            console.log(F + " " + Math.floor(C));
        } else {
            console.log(F + " " + Math.ceil(C));
        }
    }
}

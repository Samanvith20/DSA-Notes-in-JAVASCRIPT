

//TODO:  Find Quadrant of the coordinate point


// Problem statement
// Write a program to accept a coordinate point in an XY coordinate system and determine in which quadrant the coordinate point lies.

// Print

// "1st Quadrant": if  +x,+y
// "2nd Quadrant": if -x,+y
// "3rd Quadrant": if -x,-y
// "4th Quadrant": if +x,-y
// "x axis": if x,0
// "y axis": if 0,y
// "Origin": if 0,0



function findQuadrant(x, y) {
    if (x === 0 && y === 0) {
        return "Origin";
    } else if (x === 0) {
        return "y axis";
    } else if (y === 0) {
        return "x axis";
    } else if (x > 0 && y > 0) {
        return "1st Quadrant";
    } else if (x < 0 && y > 0) {
        return "2nd Quadrant";
    } else if (x < 0 && y < 0) {
        return "3rd Quadrant";
    } else {
        return "4th Quadrant";
    }
}

// Handle the input/output from main
function main() {
    // Read input
    const input = readLine().split(' ');
    const x = parseInt(input[0]);
    const y = parseInt(input[1]);

    // Call the function
    const result = findQuadrant(x, y);

    // Log the output
    console.log(result);
}

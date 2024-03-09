

//TODO:FIND TOTAL SALARY



// Ninja just got an offer letter from a reputable company. The company sent him an offer letter along with the salary bifurcation.

// In that bifurcation,Total Salary was not mentioned but instead a ‘basicSalary’ and an upper case character representing grade was mentioned, depending on which the Total Salary is calculated.

// Help Ninja in calculating his total salary, where total salary is defined as:

// ‘totalSalary’ = ‘basic’ + ‘hra’ + ‘da’ + ‘allowance’ - ‘pf’
// The above terms are as follows:

// ‘hra’ = 20% of ‘basic’
// ‘da’ = 50% of ‘basic’
// ‘allowance’ = 1700 if grade = ‘A’
// ‘allowance’ = 1500 if grade = ‘B’
// ‘allowance’ = 1300 if grade = ‘C' or any other character
// ‘pf’ = 11% of ‘basic’.
// Note :

// Round off the ‘totalSalary’ and then print the integral part only.

// 'x.5' type values will always be round up, for example, 1.5, 2.5 will be round off to 2, 3 respectively.




// Function to calculate total salary based on basic salary and grade
function calculateTotalSalary(basicSalary, grade) {
    // Calculate House Rent Allowance (HRA): 20% of basic salary
    let hra = 0.2 * basicSalary;
    // Calculate Dearness Allowance (DA): 50% of basic salary
    let da = 0.5 * basicSalary;
    // Calculate Provident Fund (PF): 11% of basic salary
    let pf = 0.11 * basicSalary;
    let allowance;

    // Determine allowance based on grade
    switch (grade) {
        case 'A':
            allowance = 1700;
            break;
        case 'B':
            allowance = 1500;
            break;
        default:
            allowance = 1300;
    }

    // Calculate total salary by adding basic, HRA, DA, and allowance, and subtracting PF
    let totalSalary = basicSalary + hra + da + allowance - pf;

    // Round off the total salary to the nearest integer
    totalSalary = Math.round(totalSalary);

    // Return the total salary
    return totalSalary;
}

// Test cases
console.log(calculateTotalSalary(10000, 'A')); // Expected output: 17600
console.log(calculateTotalSalary(4567, 'B'));  // Expected output: 8762
console.log(calculateTotalSalary(1500, 'B'));  // Expected output: 3885
console.log(calculateTotalSalary(5000, 'C'));  // Expected output: 9250

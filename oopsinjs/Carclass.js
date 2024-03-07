

//TODO:  Car Class


// Design a class Car having parameterized constructor that takes two arguments as an input i.e noOfGear and color and a printCarInfo method that prints the CarInfo i.e noOfGear and color.

// Design another class RaceCar having parameterized constructor has an additional attribute maxSpeed and printRaceCarInfo method that prints the RaceCarInfo i.e noOfGear, color and maxSpeed.

// Note: You have to create an object of class RaceCar and call the printRaceCarInfo method.

  // this is used to refer to the current object instance, and it allows you to access and modify properties and methods within that object.

  //The this keyword is used to assign the values passed to the constructor (noOfGear and color) to the properties noOfGear and color of the object that is being created using the Car class.


  // Define the Car class
class Car {
    // Constructor for initializing the Car object
    constructor(noOfGear, color) {
        this.noOfGear = noOfGear; // Set the number of gears
        this.color = color; // Set the color of the car
    }

    // Method to print the information of the car
    printCarInfo() {
        console.log(`noOfGear: ${this.noOfGear}`); // Print the number of gears
        console.log(`color: ${this.color}`); // Print the color of the car
    }
}

// Define the RaceCar class, which extends the Car class
class RaceCar extends Car {
    // Constructor for initializing the RaceCar object
    constructor(noOfGear, color, maxSpeed) {
        super(noOfGear, color); // Call the constructor of the Car class with noOfGear and color
        this.maxSpeed = maxSpeed; // Set the maximum speed of the race car
    }

    // Method to print the information of the race car, including inherited information
    printRaceCarInfo() {
        super.printCarInfo(); // Call the printCarInfo method of the Car class to print basic car info
        console.log(`maxSpeed: ${this.maxSpeed}`); // Print the maximum speed of the race car
    }
}

// Main function where the program execution starts
function main() {
    let noOfGear = parseInt(readLine()); // Read the number of gears from the input
    let color = String(readLine()); // Read the color of the car from the input
    let maxSpeed = parseInt(readLine()); // Read the maximum speed of the race car from the input

    // Create a new RaceCar object with the provided attributes
    let raceCar = new RaceCar(noOfGear, color, maxSpeed);
    // Call the printRaceCarInfo method to print the information of the race car
    raceCar.printRaceCarInfo();
}

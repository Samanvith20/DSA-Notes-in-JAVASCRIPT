

//TODO:  Area of a Rectangle

//Problem Statement :  Design a class called Rectangle. It contains two data members as length(L) and breadth(B); and a member function getArea(). The member function computes the area of the given rectangle and returns it to the caller.


function main() {
    // Define the Rectangle class
    class Rectangle {
        constructor(length, breadth) {
            this.length = length;
            this.breadth = breadth;
        }

        getArea() {
            return this.length * this.breadth;
        }
    }

    // Extract length and breadth from input
    const [length, breadth] = input_stdin_array[0].split(' ').map(Number);

    // Create an instance of Rectangle
    const rect = new Rectangle(length, breadth);

    // Compute area using getArea method
    const area = rect.getArea();

    // Output the area
    console.log(area);
}

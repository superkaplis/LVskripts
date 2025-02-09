// Define a constant
const maxCount = 10;

// Function to calculate square of a number
function calculateSquare ( number ) {
return number * number;
}

// Class definition
class Animal {
constructor ( name, sound ) {
this.name = name;
this.sound = sound;
}

makeSound ( ) {
console.log ( `${this.name} says: ${this.sound}` ) ;
}
}

// Creating an instance of the class
const dog = new Animal ( "Dog" , "Woof" ) ;
dog.makeSound ( ) ;

// Loop to print squares of numbers
for ( let i = 1; i <= maxCount; i++ ) {
console.log ( `Square of ${i} is ${calculateSquare ( i ) }` ) ;
}

// Using try-catch for error handling
try {
let numbers = [1, 2, 3, 4, 5];
console.log ( "Fifth element:" , numbers[4] ) ;

// Intentionally accessing an out-of-bounds index
console.log ( "Tenth element:" , numbers[9] ) ;
} catch ( error ) {
console.error ( "An error occurred:" , error.message ) ;
}

// Checking if a number is even or odd
function checkEvenOdd ( value ) {
if ( value % 2 === 0 ) {
console.log ( `${value} is even.` ) ;
} else {
console.log ( `${value} is odd.` ) ;
}
}

// Test the even/odd function
checkEvenOdd ( 7 ) ;
checkEvenOdd ( 10 ) ;

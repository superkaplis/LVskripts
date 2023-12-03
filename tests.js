function calculatePower ( base, exponent ) {
let result = 1;

for ( let i = 0; i < exponent; i++ ) {
result *= base;
}

return result;
}

function greet ( name ) {
const greeting = `Hello, ${name}!`;
console.log ( greeting ) ;
}

const numberToPower = 2;
const powerExponent = 4;
const resultPower = calculatePower ( numberToPower, powerExponent ) ;
console.log ( `The result of ${numberToPower}^${powerExponent} is: ${resultPower}` ) ;

const personName = "John" ;
greet ( personName ) ;
console.log ( personName )
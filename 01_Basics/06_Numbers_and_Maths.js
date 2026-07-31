// let score =400;
// console.log(score);

// const balance = new Number(100);  // using the object method it assure that the input is number only 
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //100.00

// const otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(3)); //23.9

const hundreds = 1000000; // so we face difficulty in checking zero
console.log(hundreds.toLocaleString()); //1,000,000 by us standards but actually here 
 //it prints 10,00,000 because in our environment the locale is indian only not us so by default it is indian 
console.log(hundreds.toLocaleString('en-IN')); //10,00,000 this convert in indian way
//use this for safety if you want in indian format


//+++++++++ Maths +++++++++

//default library of js 

console.log(Math);
/*
Math.PI
Math.abs(x) – Returns the absolute (positive) value.
Math.ceil(x) – Rounds up to the nearest integer.
Math.exp(x) – Returns e raised to the power x.
Math.floor(x) – Rounds down to the nearest integer.
Math.log(x) – Returns the natural logarithm (base e).
Math.pow(x, y) – Returns x raised to the power y.
Math.random() – Returns a random number between 0 (inclusive) and 1 (exclusive).
Math.round(x) – Rounds to the nearest integer.
Math.sqrt(x) – Returns the square root.
Math.max(...values) – Returns the largest value.
Math.min(...values) – Returns the smallest value.
Math.trunc(x) – Removes the decimal part, keeping only the integer part.
*/

console.log(Math.abs(-4)); //4
console.log(Math.round(4.6)); //5
console.log(Math.ceil(4.2)); //5
console.log(Math.floor(4.8)); //4
console.log(Math.min(2,3,4,5,6)); 
console.log(Math.max(2,3,4,5,6)); 

console.log(Math.random());

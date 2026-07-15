"use strict" ; // treat all js code as per newer version

//ReferenceError: alert is not defined
// alert(3+3) // heer we can not give ; and it is fine but this will give error here 
//because we are using node.js not browser

console.log(3
    +
    3)      //code readability shpould be high

console.log("dibu");

let name="dibu";
let age = 23;
let student = true;
let state ; //undefined
let city = null;



//number => 2 to power 53 is the range 
// bigint => although we will not use it generally 
// boolean => true/false 
//string => "" / ''
//undefined => variable value is yet not declared ; 
            // User data has not loaded yet.
//null => standalone value 
        // Loading finished, but no user was found.
//symbol => when we will talk of unique component


//object 

console.log(typeof "dibu");
console.log(typeof age);
console.log(typeof undefined); // undefined
console.log(typeof null);   //object
//if 

// if(2 == "2"){
//     console.log('2=="2"'); //2=="2"
// }
// if(2 === "2"){
//     console.log("=== check type also  so this statement will not be printed");
// }
// else{
//     console.log("=== check type also and it is strict checker ");
// }

// if(2 !== "2"){
//     console.log("2 !== '2' it strictly check not equal to"); //2 !== '2'
// }

//scope related

let score =200;
if(score > 100){
    const power ="fly"; //the scope of this variable is inside this curly braces only
    console.log(`the power is ${power}`)
}
// console.log(power); //ReferenceError: power is not defined

if(score >50) console.log('implicit scope '); //implicit scope

const num = 5;
if(num == 0){
    console.log("0");  
}
else if(num >1 && num < 10 ) console.log("single digit  number");
else if(num > 9 || num < 0 ) console.log("not required number");
else console.log("enter a valid number");


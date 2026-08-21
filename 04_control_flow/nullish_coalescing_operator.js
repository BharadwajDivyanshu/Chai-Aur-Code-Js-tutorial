//Nullish Coalescing Operator (??) : null & undefined

let val1;
val1 = 5 ?? 10;
console.log(val1); //5

let val2;
val2 = null ?? 10;
console.log(val2); //10

let val3;
val3 = undefined ?? 10 ?? 20;
console.log(val3); //10

//Ternary Operator
// condition ? true : false 

const price =100 ;
price >=80 ? console.log("over priced") : console.log("correct price"); //over priced
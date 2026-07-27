// There are mainly 2 type of datatype on the basis of how the value is stored and retrived from the memory

//#1 Primitive :
//  Bascially when we pass any value then actual reference is not passed
// a copy of value is passed so changing that do not chnage the actual value

//7 type : String , Number , Boolean , null , undefined , symbol , BigInt


// #2 Reference Type or Non Primitive : 

// Array , Object ,function

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id);
console.log(anotherId);
console.log(id === anotherId);

const bigInteger = 2345326789837n;



const arr =["dibu","bunty","minu","chuttu"];
const obj = {
    name : "dibu",
    age : 23
};
const myFun = function(){
    console.log("hello ");
    
}

console.log(typeof(bigInteger));  // bigint
console.log(typeof(arr));         //object : special type of object
console.log(typeof(obj));         //object
console.log(typeof(myFun));       //function (called as object functopn)
console.log(typeof(id));       //symbol





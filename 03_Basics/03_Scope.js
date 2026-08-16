if(true){
    let a = 10;
    const 
    b = 20;
    var c = 30;
}
// console.log(a);  //a is not defined
// console.log(b);  //b is not defined
console.log(c); //30 

let d =50;
if(true){
    let d = 100;
    console.log(d);//100
}
console.log(d);//50

//Nested Scope

function one (){
    let name = "Dibu";
    function two (){
        let age = 23;
        console.log(name); //Dibu
    }
     // console.log(age); //ReferenceError: age is not defined
    two();
   
}
one();

// ******************  Interesting  *****************
console.log(addone(5)); //6
function addone(num){
    return num + 1 ;
}
console.log(addone(5)); //6

console.log(addtwo(8)); //ReferenceError: Cannot access 'addtwo' before initialization
const addtwo = function (num){
    return num + 2;
} 
console.log(addtwo(8)); //10
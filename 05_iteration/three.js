// for of (array specific loop)

let arr = [1,2,3,4,5,6];
for ( const num of arr){
    // console.log(num);
}

let greeting = "hello world"
for(const greet of greeting){
    console.log(`each character is : ${greet}`);
}

//Map : store unique key and store as key value pair and maintain the order of each element
const map = new Map();
map.set("In","India");
map.set("USA","United State of America");
map.set("Fr","France");

console.log(map);

for(const key of map){
    console.log(key);
}
for(const [key,value] of map){
    console.log(`${key} is the key and the value is ${value}`);
}

let myObject ={
    name : "Dibu",
    age : 23
};

for(const [key,value] of myObject){
    console.log(key + ":-" + value); //TypeError: myObject is not iterable
}

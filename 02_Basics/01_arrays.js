//elements of array in js can be of different datatype

const myArr = [1,2,3,4,5]; // array is a object
// console.log(myArr[0]);

// const heroes = ["shaktiman" , "krish" ,"flying jatt" ,"karma"]
// console.log(typeof(myArr));

// const arr2 = new Array(1,2,3,4,5,6,7);
// console.log(arr2[4]);

//Methods

//[1,2,3,4,5]

// myArr.push(6);
// myArr.push(7);
// console.log(myArr);

// myArr.pop();
// console.log(myArr); //[ 1, 2, 3, 4, 5, 6 ]

// myArr.unshift(9);
// console.log(myArr);  //[ 9, 1, 2, 3, 4, 5, 6 ]

// myArr.shift();
// console.log(myArr);  //[ 1, 2, 3, 4, 5, 6 ]

// console.log(myArr.includes(9));  //false
// console.log(myArr.includes(3));  //true
// console.log(myArr.indexOf(3));   //2
// console.log(myArr.indexOf(10));  //-1

const newArr = myArr.join();

// console.log(myArr); //[ 1, 2, 3, 4, 5 ]
// console.log(newArr); //1,2,3,4,5
// console.log(typeof newArr);  //string

//Slice & Splice

console.log("A " , myArr);  //A  [ 1, 2, 3, 4, 5 ]
const myn1 = myArr.slice(1,3); //[ 2, 3 ]
console.log(myn1);

console.log("B ", myArr);   //B  [ 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3); //[ 2, 3, 4 ]
console.log(myn2);
console.log("C " , myArr);  //[ 1, 5 ]


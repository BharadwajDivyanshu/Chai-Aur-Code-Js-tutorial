// does for each return any value

// const coding = ["ruby","c++","java","python"];

// const returnValue = coding.forEach((val) => {
//     console.log(val);
//     return  val;
// });
// console.log(returnValue); //undefined


//filter
const myNum =[1,2,3,4,5,6,7,8,9,10];

const newNums = myNum.filter((num) => num>4);
// const newNums = myNum.filter((num) => {
//     return num>4; // when we are using curly braces we must write "return"
// });

//this same filter thing we can do using the for each

const newNums2 =[];
myNum.forEach((num) => {
    if(num>4) newNums2.push(num);
})
console.log(newNums); //[ 5, 6, 7, 8, 9, 10 ]
console.log(newNums2); //[ 5, 6, 7, 8, 9, 10 ]

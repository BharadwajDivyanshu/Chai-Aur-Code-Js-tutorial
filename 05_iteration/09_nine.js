// Reduce : will be used a lot like in shopping cart 

const myNums = [1,2,3,4,5];

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`accumulator : ${acc} currentValue : ${currval}`);
//     return acc + currval
// },0 /*this is the initial value which is to be passed in the accumulator */);

const myTotal = myNums.reduce((acc,currval) => acc + currval ,0);

console.log(myTotal);

const myCart = [
    {
        name : "dsa",
        price : 999
    },
    {
        name : "web dev",
        price : 3499
    },
    {
        name : "ai ",
        price : 7499
    },
    {
        name : "agentic ai ",
        price : 12699
    }
];

let totalPrice = myCart.reduce((acc,currval) => acc + currval.price,0);
console.log(totalPrice);
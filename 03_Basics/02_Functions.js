//shoping cart do not know how much item is going to come in cart

//Rest Operator
function calculateCartPrice(...num1){
    return num1;
}

// console.log(calculateCartPrice(200,300,400,500)); //[ 200, 300, 400, 500 ]

function calculatePrice(val1,val2,...num1){
    return num1;
}

// console.log(calculatePrice(200,300,400,500));//[ 400, 500 ]

const user ={
    userName : "Dibu",
    price : 299
};
function handleObject(anyobject){
    console.log(`${anyobject.userName} is the name and price is ${anyobject.price}`);
}

handleObject(user);
handleObject({
    userName : "Dibu",
    price : 399
});
//if we change userName to name then we will get undefined so in function using if else we haev to check

const newArray = [200,300,400,500];
function handleArray(getArray){
    return getArray[2];
}

console.log(handleArray(newArray)); //400
console.log(handleArray([200,300,400,500])); //400

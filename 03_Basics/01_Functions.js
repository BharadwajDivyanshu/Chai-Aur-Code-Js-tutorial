function sayMyName (){
    console.log("D");
    console.log("i");
    console.log("v");
    console.log("y");
    console.log("a");
    console.log("n");
    console.log("s");
    console.log("h");
    console.log("u");
}

// sayMyName();

function addNumber( number1 , number2){
    console.log(number1 + number2);
}
// addNumber(2,3);
function addNum( number1 , number2){
    let sum =number1+number2;
    return sum;
}
let sum = addNum(7,8);

// console.log(sum);

function loginUserMessage(username){
    return `${username} just logged in`;
}

console.log(loginUserMessage("Dibu"));
console.log(loginUserMessage(""));// just logged in
console.log(loginUserMessage()); //undefined just logged in

function loginMessage(username){
    if(username === undefined){
        console.log("Enter username");
        return;
    }
    //or
    if(!username){ //username == undefined == false
        console.log("Enter username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginMessage()); 

function Message(username = "user"){
    return `${username} just logged in`;
}

console.log(Message()); //user just logged in
console.log(Message("Dibu"))//Dibu just logged in
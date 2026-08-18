// implicit and explicit return 

const addtwo1 = (num1 , num2) => {
    return num1 + num2 ;
}
console.log(addtwo1(3,4)); //7

const addtwo2 = (num1, num2) => num1 + num2; //no need to write return
console.log(addtwo2(3,4)); //7

const addtwo3 = (num1, num2) => (num1 + num2); //when we want to return object or something then we can not use {} as then it will expect a return
console.log(addtwo3(3,4)); //7

const addtwo4 = (num1, num2) => ({username : "Dibu",age : 23}); //here we must wrap it with parenthesis
console.log(addtwo4(3,4)); //{ username: 'Dibu', age: 23 }
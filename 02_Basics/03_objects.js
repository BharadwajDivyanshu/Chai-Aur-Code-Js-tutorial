//Singelton
//object.create

//object literal

const jsUsers = {
    name : "Divyanshu" ,            //the key  are already treated as string either we put in quotes or not
    "full name" : "Divyasnhu Bharadwaj",
    age : 22,
    email : "dibu@gmail.com" ,
    location : "Munger",
    isLogged : true,
    lastLoginDays : ["Monday","Friday"]
};

console.log(jsUsers.name);
console.log(jsUsers["name"]);

console.log(jsUsers["full name"]); // this can not be accessed using jsUsers.

//how to use symbol as the key 
const mySym = Symbol("Key1");
const symUser = {
    [mySym] : "myKey1"
    //mySym : "mykey1"  //here we are not using symbol but the string "mySym" as the key
} 
//console.log(symUser.mySym); //mykey1  // key is not actually sumbol
console.log(symUser[mySym]); //mykey1  //actual symbol can be accessed like this only 


//change value
jsUsers.email = "divyanshu@gmail.com";
console.log(jsUsers);  //  email: 'divyanshu@gmail.com',

// we can also freeze the chaneg where no one can change any value

Object.freeze(jsUsers);
jsUsers.email = "dibu@gmail.com";
console.log(jsUsers);   // email: 'divyanshu@gmail.com',


//adding methods/function
//first comment out Object.freeze otherwise no change

jsUsers.greeting = function(){
    console.log("Hello js uses ");
}
jsUsers.greetingTwo = function (){
    console.log(`hello user ,${this.name}`);
}
console.log(jsUsers.greeting());
//output
// Hello js users      // from inside the function
// undefined           // console.log prints the return value
console.log(jsUsers.greetingTwo());



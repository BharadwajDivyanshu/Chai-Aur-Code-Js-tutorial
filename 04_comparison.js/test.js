console.log(3>2);
console.log(3<2);
console.log(3==3);
console.log(3!=3);
console.log(3>=2);
console.log(3<2);

// all return boolean  value

console.log("2">1);
console.log("02">1); // auto conversion take place 

console.log(null > 0);    //false
console.log(null == 0);   //false
console.log(null < 0);    //false
console.log(null >= 0);   //true
console.log(null <= 0);   //true

// this happen because == and comparison( > , < , >= ) works differntly as
// comparison convert the null in the number while equality has differnt rule for it 
//null == undefined → true
// null == anything else → false

console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);
console.log(undefined >= 0);  // all are false as it is conerted in NaN not 0 like null
//avoid these type of conversion and comparison

console.log("3" == 3);   //true
console.log(null == undefined);  //true


console.log("3" === 3);  //strictly check even the datatype as well as the value 
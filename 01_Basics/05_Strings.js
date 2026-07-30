let name = "Divyanshu";
let repoCount = 10 ;

// console.log(name + repoCount + " hello"); //outdated way 

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) ; // modern way of doing 

let gameName = new String('bgmi'); // so here we are using js object to initialize a string
//inside the bracket that is the constructor and we can also use different methods that is in this string object

console.log(gameName);

/*
String {'bgmi'}
0: "b"
1: "g"
2: "m"
3: "i"
length: 4[[Prototype]]: String
[[PrimitiveValue]]: "bgmi"
*/

// since it is object so we can see key : value pair 

console.log(gameName[0]); // b
console.log(gameName.__proto__); 
 /*
 String {'', anchor: ƒ, at: ƒ, big: ƒ, blink: ƒ, …}
anchor
: 
ƒ anchor()
at
: 
ƒ at()
big
: 
ƒ big()
blink
: 
ƒ blink()
bold
: 
ƒ bold()
charAt
: 
ƒ charAt()

*/

// Althhough as we can use .length witho using __proto__ we can also use method without using  __proto__ 

console.log(gameName.length);
console.log(gameName.toUpperCase()); // actual value is not chaneged as it is primitive datatype and a copy is passed

console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

gameName = 'divyanshu';
 console.log(gameName.substring(0,4));
 console.log(gameName.slice(-9,4)); // in slice we can give negative value

 const anotherName = '    divyanshu    ' ; // by mistake user give extra space
 console.log(anotherName); //'    divyanshu    '
 console.log(anotherName.trim()); //'divyanshu'

 const url = "https://divyanshu.com/divyanshu%20bharadwaj" ; // when user give space it is replaced with %20

console.log(url.replace('%20' , '-'));
console.log(url.includes('divyanshu'));

const s1 = "hello how are you i am fine";
console.log(s1.split(' '));

// go on console see all type of methods search it on mdn docs 



 

 



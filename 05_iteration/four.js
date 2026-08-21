//for in loop

const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift for apple"
}
for(const key in myObject ){
    console.log(`${key} is shortcut of ${myObject[key]}`);
}

//in for in loop we can only access the key then using key we acces value

let myArr = ["superman","batman","spiderman"];
// for(const key in myArr){
//     console.log(key);
// }
/* output
0
1
2
*/

for(const key in myArr){
    console.log(`${key} is teh key and value is ${myArr[key]}`);
}

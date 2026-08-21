const name ="Dibu";
if (name){
    console.log("name found");
} else {
    console.log("name not found");
}

// we did not put any comparison ot true false value but still we get true vale this only truthy value

/*Falsy value
false,0,-0, bigInt 0n , "" ,null , undefined , Nan

other than these even [] empty array is truthy value
*/

//truthy value where people get confused 
// "0" ,"false" ," " ,[] ,{} ,function(){} empty function

//check empty array and object

const arr = [];
if(arr.length === 0) console.log("empty array"); //empty array

const obj = {};
if(Object.keys(obj).length === 0) console.log("empty object"); //empty object

// false == 0 =>true
// false == '' =>true
// '' == 0 =>true

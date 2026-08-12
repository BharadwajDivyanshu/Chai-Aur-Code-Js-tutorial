//Singelton : created using constructor

const tinderUser = new Object(); // this is a singelton object
// const tinderUser = {}; // internally both are same but this is not a singelton object

tinderUser.id = "123abc";
tinderUser.name = "Dibu";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "abc@gmail.com",
    fullname : {
        userfullname : {
            firstname : "Divyasnhu",
            lastname : "Bharadwaj"
        }
    }
}


// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1 : "a" , 2 : "b" };
const obj2 = {3 : "a" , 4 : "b" };
const obj3 = {5 : "a" , 6 : "b" };

// const returnObj = {obj1,obj2};

// console.log(returnObj); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
//in this the whole object is passed as one now combination so do not do this 

// const returnObj = Object.assign(obj1,obj2);
// console.log(obj1);       //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(returnObj);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

//this happen because first object is treated as a target and other as source 

//Better way 
const obj = Object.assign({},obj1,obj2,obj3);
console.log(obj1);  //{ '1': 'a', '2': 'b' }
console.log(obj);   //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// Most of Time Spread Operator

const objFinal = {...obj1,...obj2,...obj3};
console.log(objFinal);


//When data come from database it generally come in form of arrays of object

const arrObj = [
    {
        name : "dibu",
        age : 23
    },
    {
        name : "bunty",
        age : 25
    },
    {
        name : "minu",
        age : 26
    }

];
console.log(arrObj[2].name);


//IMP we will use this many time in projects
console.log(Object.keys(tinderUser));   //[ 'id', 'name', 'isLoggedIn' ] return array so we can access it
console.log(Object.values(tinderUser)); //[ '123abc', 'Dibu', false ]
console.log(Object.entries(tinderUser)); //[ [ 'id', '123abc' ], [ 'name', 'Dibu' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true

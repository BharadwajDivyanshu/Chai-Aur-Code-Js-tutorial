//for each loop is inbuilt prototype of array and this is what we will use the most

const coding = ["ruby","c++","java","python"];
//in this we have to give a callback function
//callback function do not have name

// //#1
// coding.forEach(function(item){
//     console.log(item);
// });

// //#2
// coding.forEach((val) => {
//     console.log(val);
// });

// //#3
// function print(item){
//     console.log(item);
// }
// coding.forEach(print); //here we are not calling the function just giving the reference


//we have multiple parameter 
coding.forEach((item,index,myArr) =>{
    console.log(item,index,myArr); //ruby 0 [ 'ruby', 'c++', 'java', 'python' ] ......
    
});

const myCoding =[
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "c++",
        languageFileName : "cpp"
    },
    {
        languageName : "python",
        languageFileName : "py"
    }
]

myCoding.forEach((item) =>{
    console.log(item.languageFileName);
} );
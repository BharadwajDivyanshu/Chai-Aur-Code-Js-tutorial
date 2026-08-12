//Object Destructuring
const course = {
    name : "js hindi",
    price : 999,
    courseInstructor : "Hitesh"
};

const {courseInstructor : sir} = course;
console.log(sir);
console.log(sir);  // so we are using it multiple time so to make code look clean we can use it


//JSON 
//when we call an API we get data in this form only
{
    "name" : "Hitesh",
    "courseName" : "js Hindi",
    "price" : "free"
};

//sometime we can also get data as array of object
[
    {},
    {},
    {}
];


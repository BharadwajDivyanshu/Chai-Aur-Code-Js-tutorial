let myDate = new Date();

console.log(myDate); //2026-08-02T06:05:55.886Z
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

console.log(typeof(myDate));

let otherDate = new Date(2026,7,1);
console.log(otherDate.toDateString());
let date1 = new Date(2026,7,1,23,2);  //1/8/2026, 11:02:00 pm
let date2 = new Date("2026-08-01");// yyyy/mm/dd   1/8/2026, 5:30:00 am
let date3 = new Date("01-14-2026"); // MM-DD-YYYY    14/1/2026, 12:00:00 am
console.log(date3.toLocaleString());

let myTimeStamp = Date.now(); // from 1970 date in millisecond
let myCreateDate = new Date("08-01-2026");
console.log(myTimeStamp); //1785649712787
console.log(myCreateDate.getTime()); // to get the values in milliseconds
console.log(Math.floor(Date.now()/1000)); //to seconds

let newDate = new Date();

console.log(newDate.getDay()); //0 for sunday
console.log(newDate.getMonth() + 1); //0 for jan
console.log(newDate.getDate());
// console.log(myTimeStamp.getMonth()); // errror can not find it by timestamp

newDate.toLocaleString('default',{
    weekday : long , //click ctrl + space to see all property of this object
    
})
// so it is useful to customize by passing the object as a parameter in toLocaleString 







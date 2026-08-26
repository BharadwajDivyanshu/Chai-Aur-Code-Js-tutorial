// map : it automatically return value 

const myNumbers = [1,2,3,4,5,6,7,8,9,10] ;
// const newNums = myNumbers.map((nums) => nums + 10);

//chaining : using multiple map and filter together

const newNums = myNumbers
                .map((nums) => nums*10)
                .map((nums) => nums + 1) // the value retuned by above map is passed in this 
                .filter((nums) => nums >= 50); //[ 51, 61, 71, 81, 91, 101 ]
console.log(newNums);
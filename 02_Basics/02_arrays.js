const marvel_heroes = ["thor","ironman","spiderman"];
const dc_heroes = ["superman","flash","batman"];

// marvel_heroes.push(dc_heroes); // since in arry different type of datatype can be there the whole
                            // array is pushed as one element

// console.log(marvel_heroes); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

const allheroes = marvel_heroes.concat(dc_heroes);
console.log(allheroes);  //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
console.log(marvel_heroes); //[ 'thor', 'ironman', 'spiderman' ]


//******* Spread Operator **********
// it is used more in place of concat

const all_new_heroes = [...marvel_heroes , ...dc_heroes] ; // can add multiple things
console.log(all_new_heroes);

const another_array = [1,2,[3,4,5],6,[7,8,[9,10]],11];
const usable_another_array = another_array.flat(Infinity) ; //parameter is the depth which we have to check
// although it is not recommended to use infinity when we know the depth
console.log(usable_another_array);
/*
[
   1, 2, 3, 4,  5,
   6, 7, 8, 9, 10,
  11
]
  */

console.log(Array.isArray("Dibu")); //false
console.log(Array.from("Dibu")); //[ 'D', 'i', 'b', 'u' ]
console.log(Array.from({name : "Dibu"})); // intersting , gives empty array as we have to tell array of key or value 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); //[ 100, 200, 300 ]
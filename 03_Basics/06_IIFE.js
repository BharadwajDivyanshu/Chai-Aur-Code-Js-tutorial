//IIFE : Immediately Invoked Function Expressions

/* From name we can say that a function which is executed just after the defination
but there is one more important thing about it ,it also 
prevent the function to be polluted by any global variable */


// let count = 10;

// (function () {
//     let count = 5;
//     console.log(count); // 5
// })();

//()()

/*IIFE can access global variables, but variables created 
inside the IIFE are isolated from the global scope. */

/* Creates its own scope.
Executes immediately.
Its local variables cannot be accessed from outside.
Since there is no function name/reference saved, you cannot call it again afterward */

//************* chai aur code start from here ***************

(function chai (){
    console.log(`DB CONNECTED`);
})();

//chai(); //ReferenceError: chai is not defined

(() => {
    console.log(`DB CONNECTED TWO`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Dibu");
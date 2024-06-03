for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
    // for i = 1 , wait for 1 sec
} // hoisiting + asynchronous behaviour

// asynchronous behavious states to run the the other part of code with the flow along with the asynchronous code

// when we declare a variable with var keyword it gets hoisted on the top of scope
// compilation -> execution

console.log(a); // the compiler knows that a is variable declared with var key word
var a = 10; // initialization

console.log(a);

// two phases of program in JS

// 1 > Compilation : During the compilation phase , the compiler will check for variables and taking the variables with var keyword to global scope (with default value of undefined )

// 2 Execution Step : During execution the code is executed line by line and the value of variable is printed with the given initialization , inCase of no initializaation undefined is printed as a default behaviour

/*
Author: Karl Moody.
Date: 20/02/2023
Learning about JavaScript
*/

//variables

var first = 0;// case sensitive
var First = 0;// variables
var str = "quote"; //
var bool = true; // value of 0 will always evaluate to true unlike other languages.

var num;

console.log(first);

// = assigns a value
// == equality operator

first = 3; // change the value of the container to 3
console.log(first);

let PI = 3.14;
PI = 3.67; // capital letters for const is a conventional coding approach.


//function

let name = "James";

function sayHello (name = "New User") {
    name = name.toLowerCase();
    console.log(`Hello ${name}`);
}

sayHello(name);
sayHello();


console.log(name);


//scope example
scopeTest();
//var has complete scope of the function
function scopeTest(){
    var x = 10;
    {
        var x = 20;
        console.log(x);
    }
console.log(x);
}
//let has only the scope of each {}
function scopeTest(){
    let x = 10;
    {
        let x = 20;
        console.log(x);
    }
console.log(x);
}
//const is the same as let
function scopeTest(){
    const x = 10;
    {
        const x = 20;
        console.log(x);
    }
console.log(x);
}

//returning values
console.log(multiplier(3, 6));
var x;

function multiplier(x, y){
    let newNumber = x * y;
    return newNumber;
}

let num = 34;              //JavaScript numbers are always stored as double precision floating point numbers.  2 to power 53
                           //BigInt is used for bigger number values.It is used in like Stock market.

let name = "sam";          // Everything that is written in Doubles or Single qoutes ("",'') is String.

let user_logged = true;    //Gives the values in either in True or False.

let userId ;               //The variable is created but the value didn't putted yet.

let address = null;        //The Null type has exactly one value, called null.
                           //Symbol unique identifier.


console.table([typeof num, name, user_logged, userId, address]);

console.log(typeof null);







//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);
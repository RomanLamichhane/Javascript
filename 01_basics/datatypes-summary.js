// primitives

// 7 types : String,Number,Boolean,Null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id=Symbol('1230')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber=35642222n


// Reference (Non primitive)

// Array,Objects,Functions 
 const heros =["Thor","Avenger","ironman"];
 let myObj= {
     Name : "roman",
     age: 22
 }

 const myFunction =function(){
    console.log("Hello world");
 }
 console.log(typeof score);
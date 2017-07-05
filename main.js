// Answer the following questions in this file using comments without running the code

// 1.
// What does `givenName` equal right now?
let givenName;
// A: givenName, without an equal signis a variable that is undefined. With the "let" declaration in front of it, it becomes a variable that is limited in scope to the block, statement, or expression on which it is used.
Unlike variable, let is a mathematical function of a higher level function than variable and where 
let might mean a value, or a variable that can be assigned, but not changed, which in turn lets the
compiler catch more programming errors and optimize code better. let works very much like var.
The main difference is that the scope of a var variable is the entire enclosing function

// 2.
// What is `givenName` set to right now?
givenName = "Tim";
// A:"Tim"


// 3.
// What is `givenName` set to right now?
givenName = givenName;
// A:givenName


// 4.
// What is `greeting` set to?
let greeting = "Hello, how are you? " + givenName;
// A:"Hello, how are you? " givenName
"Hello, how are you? Tim"



// 5.
// What is `math` set to?
let high = 50;
let low  = 10;
let math = high - low;
// A:40
//(let math = high - low; 50-10=40)


// 6.
// What is `math` set to?
math = high - "5";
// A:50-5


// 7.
// Create a variable to calculate Tim's age
// The answer should read "Tim is 33 years old"
// The answer shoud not be written in a comment.
let born = 1984;
let today = 2017;
// A:var age = today - born;


// 8.
// Adjust this code. Store some information in the following variables.
// A:
let yourName;
let instructorName;


// 9.
// Update the variables `yourName` and `instructorName` so the expression below reads correctly.
// A:
var yourName = "Guy";
var instructorName = "Russel";



// This statement should read correctly
let statement = Guy + "is taking a class at The Iron Yard, my instructor's name is" + Russel;


// 10.
// We've created a variable named after each primitive type.
// Use the `=` operator to assign a value to each variable matching the type in the name.
let myNumber;
let myString;
let myBoolean;
// This one's a little tricky - think carefully about what makes a value "undefined"!
let myUndefined;
// A:
// var myNumber = 12
// var myString = "Javascript is annoying to experienced programmers";
// var myBoolean = true;
// var myUndefined;


// For questions 11 - 19: List which boolean value will be stored in each variable. (Remember: `==` does not check data type)

// 11.
let x = (false == 0);
// A.false


// 12.
let y = (false == "");
// A.false


// 13.
let z = (0 == "");
// A.true


// 14.
let a = (null == null);
// A.true


// 25.
let b = (undefined == undefined);
// A.true


// 16.
let c = (undefined == null);
// A.false


// 17.
let d = (null == false);
// A.false


// 18.
let e = (NaN == null);
// A.true


// 19.
let f = (NaN == NaN);
// A.true


// 20.
// Fix the `if...else` statement below by adding an `if` keyword and conditional expression.
// Use the variable `thirsty` as part of your conditional expression.
// A:
let thirsty = true;

if (thirsty = true){
  console.log("I'm parched!");
} else {
  console.log("I've had enough to drink.");
}

// For questions 21 - 29 list which statement will be logged.

// 21.
let x;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A:true


// 22.
if(""){
	console.log("True!");
} else {
	console.log("False!");
}
// A:false


// 23.
// this expression will set x to NaN
let x = 1 * undefined;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A:false


// 24.
if(false){
	console.log("True!");
} else {
	console.log("False!");
}
// A:false


// 25.
if(-5 && 5){
	console.log("True!");
} else {
	console.log("False!");
}
// A:false


// 26.
if("Hello World!"){
	console.log("True!");
} else {
	console.log("False!");
}
// A:false


// 27.
if({}){
	console.log("True!");
} else {
	console.log("False!");
}
// A:True


// 28.
if({name: "Yehuda Katz"}){
	console.log("True!");
} else {
	console.log("False!");
}
// A:False


// 29.
if(new Date()){
	console.log("True!");
} else {
	console.log("False!");
}
// A:False


// 30.Link this file to the sibling `index.html` document, open the file in your browser and make sure there are no errors in your console.

// Variable declartion 
var string = "welcome";
var string = "welcome";
var string = "1234"
string = " var can be able to can declare , can redeclare, can assign , can reassign"
console.log(string);
// " var can be able to can declare , can redeclare, can assign , can reassign"

// let we cont redeclare but reassign value
let value = 123 +" can only declare and cont redeclare";
// let value = 123; create confusion in memeory location in pgm so we restricting using let
console.log(value);
value = 234+ "reassign diff value" // able o reassin value 
console.log(value);

//Const - not gonna redeclare and reassign

const accountnumber = 1234566;
// const accountnumber = 7834566; cont declare 
// accountnumber = 234555555; cont reassign - throw runtime error
console.log(accountnumber + " cont redeclare, cont reassign value");


var x;
let y;
const z = 10; // we cont keep like this for const need to initialize the value for const


// browser should always constant from start test to end test - until completion of using browser

//debug functionality - Hoisting
 /* scan entire js file document and check all the declaration - where its intialy taken as undefined in scripting - 
 Hoisting - taking undefined to be top - this is the first thing in .js  */ 
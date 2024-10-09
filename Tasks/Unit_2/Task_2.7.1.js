// 1. Check if a number is odd or even

let num = 0;

if(num % 2 == 0){
    console.log("Is even");
}else{
    console.log("Is odd");
}

// 2. Check if input variable is a number or not

num = prompt("Enter a number");

if(!isNaN(num)){
    console.log("Is a number");
}else{
    console.log("Is not a number");
}

// 3. Find the largest of two number

let num1 = 1
let num2 = 3;

if(num1 > num2){
    console.log("num1 is higher");
}else if(num1 < num2){
    console.log("num2 is higher");
}else{
    console.log("They are equal");
}

// 4. Find the largest of three number

num1 = 1;
num2 = 3;
let num3 = 7;

if(num1 > num2 && num1 > num3){
    console.log("num1 is higher");
}else if(num2 > num1 && num2 > num3){   //Chequeo de nuevo num2 y num1 por descartar que sean iguales
    console.log("num2 is higher");
}else if(num3 > num1 && num3 > num2){
    console.log("num3 is higher");
}

// 5. Check if a triangle is equilateral (all side equal), scalene (all side unequal), or isosceles (2
// sides are equals)

let side1 = 1;
let side2 = 1;
let side3 = 5;

if(side1 == side2 && side2 == side3){
    console.log("Equilateral triangle");
}else if(side1 == side2 || side2 == side3){
    console.log("Isosceles triangle");
}else{
    console.log("Scalene triangle");
}

// 6. Find the a number is present in given range (provide start, end and number to be found)

let numStart = prompt("Start");
let numEnd = prompt("End");
let numFind = prompt("Number");

if(numFind >= numStart && numFind <= numEnd){
    console.log("The number is in the range");
}else{
    console.log("The number is not in the range");
}

// 7. Check if a year is leap year or not. A leap year is 1.- divisible by 400 OR 2.- divisible by 4
// and not by 100

let year = 1996;

if(year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)){
    console.log("Year is leap");
}else{
    console.log("Year is not leap");
}

// 8. Rewrite the former if by using the ternary operator

year % 400 == 0 || (year % 4 == 0 && year % 100 != 0) ? console.log("Year is leap") : console.log("Year is not leap");

// 9. Show the number of days in a given month

let month = prompt("Enter a month");

//I would normally not do this but looking at the next questions I suppose this is what this asks
if(month == "January") console.log(31);
else if(month == "February") console.log(28);
else if(month == "March") console.log(31);
else if(month == "April") console.log(30);
else if(month == "May") console.log(31);
else if(month == "June") console.log(30);
else if(month == "July") console.log(31);
else if(month == "August") console.log(31);
else if(month == "September") console.log(30);
else if(month == "October") console.log(31);
else if(month == "November") console.log(30);
else if(month == "December") console.log(31);
else console.log("That is not a month");


// 10. Rewrite the former if by using a switch statement

switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      console.log(31);
      break;
    case "April":
    case "June":
    case "September":
    case "November":
      console.log(30);
      break;
    case "February":
      console.log(28);
      break;
    default:
      console.log("That is not a month");
  }

// 11. Rewrite the former if by using && and || operators

if(month == "January" || month == "March" || month == "May" || month == "July" || month == "August" || month == "October" || month == "December"){
    console.log(31);
}else if(month == "April" || month == "June" || month == "September" || month == "November"){
    console.log(30)
}else if(month == "February"){
    console.log(28);
}else{
    console.log("That is not a month");
}

// 12. Will alert be shown?

if ("0") {
    alert( 'Hello' );
}
   
//Yes, because "0" is treated as true by Javascript.

// 13. Rewrite the following code to optimize it (do not use switch). Rewrite again the following
// code by using a switch statement

// let a = +prompt('a?', '');
// if (a == 0) {
//  alert( 0 );
// }
// if (a == 1) {
//  alert( 1 );
// }
// if (a == 2 || a == 3) {
//  alert( '2,3' );
// }

//Optimized

let a = +prompt('a?');
if (a == 0 || a == 1) {
 alert( a );
}else if (a == 2 || a == 3) {
 alert( '2,3' );
}

//Switch

a = +prompt('a?');

switch (a){
    case 0:
    case 1:
        alert (a);
        break;
    case 2:
    case 3:
        alert ("2,3");
        break;
}
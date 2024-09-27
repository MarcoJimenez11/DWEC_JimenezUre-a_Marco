//1. Ask the user for his age and save it into a variable. Remember to choose a proper name and
//store as a number.

let userAge = parseInt( prompt("What is your age?") );



//2. Send the user a message with an advice on how his age is going to be stored.

alert("Your age is going to be stored as a number in our database");

//3. Ask the user for confirmation and save confirmation to a variable.

let confirmation = confirm("Do you give permissions to save that data?");

//4. Take the former code and add code that, by using a backticks, output his age to the console.

console.log(`Your age: ` + userAge);

//5. What is the output of the following code?


let name = "pepe";
console.log( `hello ${1}` );        //hello 1
alert( `hello ${"name"}` );         //hello name
alert( `hello ${name}` );           //hello pepe
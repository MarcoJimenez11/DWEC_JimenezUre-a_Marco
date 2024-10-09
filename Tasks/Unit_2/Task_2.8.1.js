//1. What is the last value output by this code? Why?

let i = 3;
while (i) {
 console.log( i-- );
}

//The last output is "1" because when "i" becomes "0" it exits the loop since "0" it's false in iavaScript

//*************************************************************************************************** */


//2. Rewrite the following code changing the for loop to while without altering its behavior
//(the output should stay same).

for (let i = 0; i < 3; i++) {
    console.log ( `number ${i}!` );
}

i = 0;
while(i < 3){
    console.log ( `number ${i++}!` );
}

//*************************************************************************************************** */

//3. Write a loop which keeps prompting for a number until it is greater than 100 or enters an
//empty line.

let number = 0;
do{
    number = prompt("Enter a number");
}while(number < 100 && number != "");

//*************************************************************************************************** */

//4. Using while loop, create two arrays: one with even numbers and another one with odds
//numbers. Both of them from 1 to n, being n a number provided by user. Using a for loop,
//create a third array whose nth number is the sum of nth number of both arrays.

let arrayEven = [];
let arrayOdd = [];
let arraySum = []
let limit = prompt("Enter the limit");
i = 0;

while(i < limit){
    if(i % 2 == 0){
        arrayEven.push(i);
    }else{
        arrayOdd.push(i);
    }
    i++;
}

for(let i = 0; i < limit/2; i++){
    arraySum.push(arrayEven[i] + arrayOdd[i]);
}

//*************************************************************************************************** */


//5. Write code which outputs prime numbers from 1 to n, being the latter a number
//provided by user.

limit = prompt("Enter the limit");
let isPrime = true;

for(let i = 2; i < limit; i++){
    isPrime = true;
    for (let k = 2; k <= i/2; k++) {
        if (i % k == 0) {
            isPrime = false;
        }
    }
    if(isPrime){
        console.log(i);
    }
}

//*************************************************************************************************** */

//6. Take odd numbers array and remove the prime numbers from it. Tip: as we have not
//seen array methods yet, the only way is to create a new array without those numbers

let arrayOddWithoutPrimes = [];

function IsPrime(number){
    let isPrime = true;
    for(let i = 2; i < number/2; i++){
        if (number % i == 0) {
            isPrime = false;
        }
    }
    return isPrime;
}
for (let i = 0; i < arrayOdd.length; i++){
    if(!IsPrime(arrayOdd[i])){
        arrayOddWithoutPrimes.push(arrayOdd[i]);
    }
}

//*************************************************************************************************** */

//7. Ask the user for a number n. Create an array of n random numbers and print the highest
//one. Use the following code to generate a random number between 0 and 9999


limit = prompt("Enter the limit");

let arrayRandom = [];

for(let i = 0; i < limit; i++){
    arrayRandom.push(Math.floor(Math.random() * 9999));
}

console.log(arrayRandom);
console.log(`The highest number of the array is ${Math.max(...arrayRandom)}`);

//*************************************************************************************************** */


//8. Ask the user for a string and print it reversed

let userText = prompt("Enter a text");

let reverseText = "";

for (let i = userText.length - 1; i >= 0; i--) {
    reverseText += userText[i];
}

console.log(reverseText);

//*************************************************************************************************** */

//9. Ask the user for a number. Print a isosceles triangle made of asterisks with as many
//levels as the number the user entered.

let numberLevels = prompt("Enter the number of levels of the triangle");
let triangle = "";

for(let i = 0; i < numberLevels; i++){
    for(let j = 0; j <= i; j++){
        triangle += "*";
    }
    triangle += "\n"
}

console.log(triangle);

//*************************************************************************************************** */

// 10. Ask the user for a number between 3 and 25. Calculate its factorial.

let numberFact = +prompt("Enter a number between 3 and 25");

if(numberFact >= 3 && numberFact <= 25){
    for (let i = numberFact - 1; i >= 1; i--) {
        numberFact = numberFact * i;
    }
    console.log(numberFact);
}else{
    console.log("The number is not in the range");
}

//*************************************************************************************************** */

// 11. Ask the user for a string and write a program that checks if it is palindrome (it is spelled
//     the same forward and backward).

let text = prompt("Enter a text");

let textReversed = "";

for (let i = text.length - 1; i >= 0; i--) { 
    textReversed += text[i];
}

if(text == textReversed){
    console.log("It's a palindrome");
}else{
    console.log("It's not a palindrome");
}

//*************************************************************************************************** */

// 12. Use the following code to generate a random pin number of 4 digits. Write code to allow
// a user to try to guess the number in 4 attempts

let numeroAleatorio = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

console.log(numeroAleatorio);

let tries = 4;

do{
    let numGuess = +prompt("Enter a number");
    
    if(numGuess == numeroAleatorio){
        console.log("You guessed it!");
        tries = 0;
    }else{
        console.log("Try again");
        tries--;
    }
}while(tries > 0);

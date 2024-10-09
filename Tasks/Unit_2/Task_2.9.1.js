// 1. Take loop exercises from 4 until the last one and rewrite them by using functions

//4. Using while loop, create two arrays: one with even numbers and another one with odds
//numbers. Both of them from 1 to n, being n a number provided by user. Using a for loop,
//create a third array whose nth number is the sum of nth number of both arrays.

let arrayEven = [];
let arrayOdd = [];
let arraySum = []
let limit = prompt("Enter the limit");


function GetArrayOddEven(limit, arrayEven, arrayOdd){
    let i = 0;
    while(i < limit){
        if(i % 2 == 0){
            arrayEven.push(i);
        }else{
            arrayOdd.push(i);
        }
        i++;
    }
}

GetArrayOddEven(limit, arrayEven, arrayOdd);


for(let i = 0; i < limit/2; i++){
    arraySum.push(arrayEven[i] + arrayOdd[i]);
}

//*************************************************************************************************** */


//5. Write code which outputs prime numbers from 1 to n, being the latter a number
//provided by user.

limit = prompt("Enter the limit");

function GetPrimes(limit){
    let isPrime = true;

    for(let i = 2; i <= limit; i++){
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
}

GetPrimes(limit);

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

function GetArrayOfRandom(){
    let arrayRandom = [];

    for(let i = 0; i < limit; i++){
        arrayRandom.push(Math.floor(Math.random() * 9999));
    }

    return arrayRandom;
}

let arrayRandom = GetArrayOfRandom();

console.log(arrayRandom);
console.log(`The highest number of the array is ${Math.max(...arrayRandom)}`);

//*************************************************************************************************** */


//8. Ask the user for a string and print it reversed

let userText = prompt("Enter a text");

function GetReversedText(text){
    let reverseText = "";

    for (let i = userText.length - 1; i >= 0; i--) {
        reverseText += userText[i];
    }

    return reverseText;
}

console.log(GetReversedText(userText));

//*************************************************************************************************** */

//9. Ask the user for a number. Print a isosceles triangle made of asterisks with as many
//levels as the number the user entered.

let numberLevels = prompt("Enter the number of levels of the triangle");

function ShowTriangle(levels){
    let triangle = "";

    for(let i = 0; i < numberLevels; i++){
        for(let j = 0; j <= i; j++){
            triangle += "*";
        }
        triangle += "\n"
    }
    
    console.log(triangle);
}

ShowTriangle(numberLevels);

//*************************************************************************************************** */

// 10. Ask the user for a number between 3 and 25. Calculate its factorial.

let numberFact = +prompt("Enter a number between 3 and 25");

function GetFactorial(numberFact){
    if(numberFact >= 3 && numberFact <= 25){
        for (let i = numberFact - 1; i >= 1; i--) {
            numberFact = numberFact * i;
        }
        console.log(numberFact);
    }else{
        console.log("The number is not in the range");
    }
}

GetFactorial(numberFact);



//*************************************************************************************************** */

// 11. Ask the user for a string and write a program that checks if it is palindrome (it is spelled
//     the same forward and backward).

let text = prompt("Enter a text");

function GetReversedText(text){
    let textReversed = "";

    for (let i = text.length - 1; i >= 0; i--) { 
        textReversed += text[i];
    }

    return textReversed;
}

let textReversed = GetReversedText(text);

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

function GuessNumber(randomNumber){
    let tries = 4;

    do{
        let numGuess = +prompt("Enter a number");
        
        if(numGuess == randomNumber){
            console.log("You guessed it!");
            tries = 0;
        }else{
            console.log("Try again");
            tries--;
        }
    }while(tries > 0);
}

GuessNumber(numeroAleatorio);


//*************************************************************************************************** */

// 2. Write a function that returns the square of a number

function GetSquare(number){
    return number * number;
}

//*************************************************************************************************** */

//3. Write a function min(a,b) which returns the least of two numbers a and b.

function GetMin(a,b){
    if(a > b){
        return a;
    }else{
        return b;
    }
}

//*************************************************************************************************** */

//4. Rewrite min function as an expression function

const getmin = function GetMin(a,b){
    if(a > b){
        return a;
    }else{
        return b;
    }
}

//*************************************************************************************************** */

//5. Rewrite min function as an arrow function

const getmin2 = (a,b) => {
    if(a > b){
        return a;
    }else{
        return b;
    }
}

//*************************************************************************************************** */

//6. Write a function pow(x,n) that returns x in power n. Ask the user fot both numbers.

function GetPow(x, n){
    let result = x;
    for(let i = 1; i < n; i++){
        result *= x;
    }
    return result;
}

let numBase = prompt("Enter the base");
let numExponent = prompt("Enter the exponent")

console.log(GetPow(numBase, numExponent));


//*************************************************************************************************** */

//7. Rewrite pow function as an expression function

const getpow = function GetPow(x, n){
    let result = x;
    for(let i = 1; i < n; i++){
        result *= x;
    }
    return result;
}

//*************************************************************************************************** */

//8. Rewrite pow function as an arrow function

const getpow2 = (x, n) => {
    let result = x;
    for(let i = 1; i < n; i++){
        result *= x;
    }
    return result;
}


//*************************************************************************************************** */

//9. Replace Function Expressions with arrow functions in the code below:

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }

// ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//    );

const ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
   );


//*************************************************************************************************** */

// 10. Write a function named calculateSupply that:
// a) takes 2 arguments: age, amount per day.
// b) calculates the amount consumed for rest of the life (based on a constant max age).
// c) outputs the result to the screen like so: "You will need NN to last you until the ripe old
// age of X"
// Express it as an arrow function, if possible

const calculateSupply = (age, amountPerDay) => {
    let maxAge = 100;
    let totalAmount = 0;

    for(let i = age; i <= maxAge; i++){
        totalAmount += amountPerDay * 365;
    }

    alert(`You will need ${totalAmount} to last you until the ripe old age of ${age} `);
}

//*************************************************************************************************** */

// 11. Create a function that greets the user by his name and with a message according to the
// moment of the day (morning, afternoon, night). It accepts two parameters: user name and a
// callback function.

function Greeting(username, GetDayMoment){
    alert(`${GetDayMoment()} ${username}`);
}

function GetDayMoment(){
    const d = new Date();
    let hour = d.getHours();

    if(hour < 12){
        return "Good morning";
    }else if(hour < 18){
        return "Good afternoon";
    }else{
        return "Good night";
    }
}

Greeting("Pepe", GetDayMoment);

//*************************************************************************************************** */

//12. Create a function that accepts three parameters: two numbers and the mathematical
// operation to be performed with these numbers. The following mathematical operations must
// be supported: addition, subtraction, division and multiplication. Use callback functions

function Calculate(num1, num2, operation){
    return operation(num1,num2);
}

function Add(num1, num2){
    return num1 + num2;
}

function Subtract(num1, num2){
    return num1 - num2;
}

function Multiply(num1, num2){
    return num1 * num2;
}

function Divide(num1, num2){
    return num1 / num2;
}

alert(Calculate(2,5,Add));
alert(Calculate(2,5,Subtract));
alert(Calculate(2,5,Multiply));
alert(Calculate(2,5,Divide));
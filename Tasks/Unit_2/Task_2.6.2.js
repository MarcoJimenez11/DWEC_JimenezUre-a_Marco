//1. Explain each otuput of the following code

console.log( null || 2 || undefined );  //First it comes to null, but after that there is an "or" so it
                                        //jumps to the 2 because null it's false. 2 is considered true so there is
                                        //no need to jump to the next or so it shows "2"

console.log( 1 && null && 2 );          //First comes the 1, but there is an "and" so it must check the 
                                        //next one. The next is null so it doesn't check the next "and" because it's already
                                        //false, so it shows "null".

console.log( null || 2 && 3 || 4 );     //First it comes to the null, but next there's an "or" so it goes to the "2" and
                                        //then to the "3" because there's an "and", but it doesn't go further because it's
                                        //already true so it shows "3".
let x = 3;
console.log((x < 5) && (x > 0));        //It shows "true" because "x" is lower than "5" and also is higher than "0"

console.log((x < 5) && (x > 6));        //It shows "false" because "x" is lower than "5" but is not higher than "6"

console.log((x > 2) || (x > 5));       //It shows "true" because "x" is higher than "2" 
                                       //so it doesn't need to check the next statement

console.log((x > 3) || (x < 0));        //It shows "false" because "x" isn't higher than "3" nor lower than "0"

console.log(!(x == 3));                 //It shows "false" because "x" equals "3"

console.log(!(x < 2));                  //It shows "true" because "x" isn't lower than "2"

//************************************************************************************ */


//2. Change the code inside console.log so output is true

const numOne = 5;
const numTwo = 6;
console.log(numOne == numTwo);

//console.log fixed
console.log(numOne < numTwo);

//************************************************************************************ */

//3. Ask user for his age and check that it is not between 14 and 90 inclusively. Create two
//variants: the first one using NOT !, the second one – without it.

let age = parseInt( prompt("What is your age?") );

if(!age >= 14 || !age <= 90){
    console.log("Your age is not between 14 and 90");
}

if(age <= 14 || age >= 90){
    console.log("Your age is not between 14 and 90");
}

//************************************************************************************ */

//4. Explain what result will produce the following code

(-1 || 0) && ( 'first' );           //This shows 'first' because the first statement is "true" (because "-1" is "true" so it
                                    //doesn't check the "0") so it goes for the second one.
(-1 && 0) || ( 'second' );          //This shows 'second' because the first statement is "false" so it goes for the second
                                    //one as being an "or"
(null || -1 && 1) && ( 'third' );   //This shows 'third' because both statements are "true" so it jumps to the final.
                                    //The first one is "true" because "null" is "false" but the other side of the "or" is "true".

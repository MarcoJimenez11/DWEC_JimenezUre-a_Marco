//1. What are the final values of all variables a, b, c and d after the code below?

let a = 1, b = 1;
let c = ++a;
let d = b++;

//The final values of these variables are: a -> 2, b -> 2, c -> 2, d -> 1

//************************************************************************************************* */


//2. What are the values of a and x after the code below?

a = 2;
let x = 1 + (a *= 2);

//The final values of these variables are: a -> 4, x -> 5

//************************************************************************************************* */

//3. What are the results of these expressions?

5 > 4                   //true
"apple" > "pineapple"   //false
"2" > "12"              //true
undefined == null       //true
undefined === null      //false
null == "\n0\n"         //false
null === +"\n0\n"       //false
"" + 1 + 0              //"10"
"" - 1 + 0              //-1
true + false            //1
6 / "3"                 //2
"2" * "3"               //6
4 + 5 + "px"            //9px
"$" + 4 + 5             //"$45"
"4" - 2                 //2
"4px" - 2               //NaN
" -9 " + 5              //" -9 5"
" -9 " - 5              //-14
null + 1                //1
undefined + 1           //NaN
" \t \n" - 2            //-2


//4. Here’s a code that asks the user for two numbers and shows their sum. It works incorrectly.
//  The output in the example below is 12 (for default prompt values). Why? Fix it. The result
//  should be 3.

a = prompt("First number?", 1);
b = prompt("Second number?", 2);
alert(a + b); // 12

//The code below fails because it's treating the inputs like strings so it's concatenating them.
//Instead, one way of doing it is parsing the strings into integers and then making the operation.

a = parseInt(prompt("First number?", 1));
b = parseInt(prompt("Second number?", 2));
alert(a + b); // 3
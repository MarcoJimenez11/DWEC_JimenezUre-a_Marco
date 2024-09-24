//1. What is the code below going to output?

alert( null || 2 || undefined );        //2
alert( alert(1) || 2 || alert(3) );     //first alert -> 1, second alert -> 2
alert( 1 && null && 2 );                //null
alert( alert(1) && alert(2) );          //first alert -> 1, second alert -> undefined
alert( null || 2 && 3 || 4 );           //3

//*************************************************************************************************** */

//2. Check the range between. Write an if condition to check that age is between 14 and 90
//inclusively. “Inclusively” means that age can reach the edges 14 or 90.

let age = 30;

if(age >= 14 && age <= 90){
    
}

//*************************************************************************************************** */

//3. Check the range outside. Write an if condition to check that age is NOT between 14 and 90
//inclusively. Create two variants: the first one using NOT !, the second one – without it.

if(!age >= 14 || !age <= 90){
    
}

if(age <= 14 || age >= 90){
    
}

//*************************************************************************************************** */

//4. Which of these alerts are going to execute?

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

//The first and third alerts executes

//*************************************************************************************************** */

/*
5. heck the login. Write the code which asks for a login with prompt. If the visitor enters
"Admin", then prompt for a password, if the input is an empty line or Esc – show
“Canceled”, if it’s another string – then show “I don’t know you”. The password is checked
as follows:
1. If it equals “TheMaster”, then show “Welcome!”,
2. Another string – show “Wrong password”,
3. For an empty string or cancelled input, show “Canceled”
*/

let username = prompt("Enter your username");

if(username == "Admin"){
    let password = prompt("Enter your password");

    if(password == "TheMaster"){
        alert("Welcome!");
    }else if(password != "" && password != null){
        alert("Wrong password");
    }else{
        alert("Canceled");
    }
    
}else if(username != "" && username != null){
    alert("I don't know you");
}else{
    alert("Canceled");
}
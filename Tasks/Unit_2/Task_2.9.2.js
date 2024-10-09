//1. Rewrite the pow function to be recursive

function GetPow(x, n){
    if(n == 1){
        return x;
    }else{
        return x * GetPow(x, n-1)
    }
}

//*************************************************************************************************** */

// 2. Create a function that accepts an undetermined number of words and returns an string with
// all these words concatenated.

function Concatenate(...words){
    let text = "";

    for(let word of words){
        text += word + " ";
    }

    return text;
}

alert(Concatenate("Hola", "Buenos", "Días"));

//*************************************************************************************************** */

// 3. Create a function that accepts three parameters: two numbers and a function that indicates
// the operation to be applied to the numbers: division or pow.

function Calculate(num1, num2, operation){
    return operation(num1,num2);
}

function Divide(num1, num2){
    return num1 / num2;
}

alert(Calculate(2,4, GetPow));
alert(Calculate(10,4, Divide));

//*************************************************************************************************** */

//4. Check the following code and explain the output

let a=b=5;
function calcula() {
 console.log(a*b);
}
a=b=10;
calcula();

//It outputs "100". The reason is that the function is executed not when it's created but when it's called,
//and in that moment "a" and "b" equals "10"


//*************************************************************************************************** */

// 5. Check the following code and explain the output

function crearCoche() {
    let marca = "Tesla";
    return function () {
        return nombre;
    };
}
let marca = "MG";
let coche = crearCoche();
coche();

// The output is the error: "nombre is not defined". That's because the function crearCoche returns another function,
//and that function returns a variable that is not declared, so when calling coche() it provoques the error.


//*************************************************************************************************** */

//6. Check the following code and explain the output

function coche(aux) {
    let nombre = aux;
    return function () {
        return nombre;
    }
}
let coche1 = coche("tesla");
let coche2 = coche("mg");
console.log(coche1());
console.log(coche2());
   
//The output is "tesla" and "mg" because in this case, "nombre" is declared as the parameter of the first function,
//so when you call coche1 and coche2 they return the "nombre" variable.

//*************************************************************************************************** */

//7. Check the following code and explain the output

let animal = "gato";
if (1) {
    let animal = "conejo";
    function habla() {
        if(animal1 == conejo){
            console.log("Los conejos no hacen ruido");
        }else {
            console.log("Los gatos maúllan");
        }
    }
}
habla();

//The output is the error: "animal1 is not defined". The reason is that "animal1" is not declared, but "animal" yes.
// if you change it, it also gives you an error about "conejo" because it's looking for a variable with that name,
//but there's only one variable and it's name is "animal". "conejo" is the value of that variable.
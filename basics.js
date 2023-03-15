// alert is used as a pop up box 
alert("Hello !")

// input 
prompt("Enter your name?") // asking user to take input

// variables are created using var keyword

// data types 
var Myname = "Rishabh Singh"    // string
var age = 19            // integer
var isMarried = false   // boolean

// strings 
var greet = "Hello"
console.log(`the length of the ${greet} is ${greet.length}`); // length 
console.log(greet + "there," + Myname); // concatenation
console.log(Myname.slice(0,8))          // slicing
console.log(Myname.toUpperCase())
console.log(Myname.toLowerCase())

// operators 
var a = 1;
console.log(2 + 3)      // addition
console.log(10 - 4)     // subtraction
console.log(4 * 5)      // multiplication 
console.log(5 / 1 )     // division operator
console.log(10 % 3)     // modulo 
console.log(a++)        // increment operator
console.log(a--)        // decrement operator

// function 
function getmilk() {     // creating the function
    console.log("Go to milk shop")
    console.log("Get the milk")
    console.log("come back")
}

getmilk()                // calling the function

// function with arugments 
function bottlesOfMilk(money) {
    alert("Each bottle costs 2 dollars")
    console.log("I have " + "this much money");
    console.log("I can buy " + Math.floor(money/2) + " bottles of milk")
}

bottlesOfMilk(33);

// function with return values 
function leftMoney(money) {
    return money % 2; 
}
console.log(leftMoney(19))


// functions for the four operators
const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

// variables for parts of a calculation
let firstNumber;
let operator;
let secondNumber;
// test numbers and operator
firstNumber = 10;
operator = subtract;
secondNumber = 25;

// calculate function - runs the two numbers as arguments through the selected operator
const calculate = function(){
    return operator(firstNumber,secondNumber);
}
// functions for the four operators
const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

// variables for parts of a calculation. MAKE SURE TO SET AS GLOBALS so they can be used in other functions
// function to wipe vars
var firstNumber = 0;
var operator;
var secondNumber = 0;

// calculate function - runs the two numbers as arguments through the selected operator
const calculate = function(){
    return operator(firstNumber,secondNumber);
}


// var to hold string while typing
var holder = "0";
// holder to store numbers
var floatHolder = 0;
// function to wipe holders
const wipeHolders = function(){
    holder = "0";
    floatHolder = 0;
}
// function to wipe vars
const wipeVars = function(){
    firstNumber = 0;
    operator;
    secondNumber = 0;
}
wipeVars()

// function to update the display
const updateDisplay = function(){
    // convert holder from string to number, also removes leading 0's
    floatHolder = parseFloat(holder);
    document.getElementById("display").innerText=floatHolder;
}

// var to hold total (for chaining)
var total;

// button press functions
const btn0 = function(){
    holder += "0";
    updateDisplay();
}

const btn1 = function(){
    holder += "1";
    updateDisplay();
}

const btn2 = function(){
    holder += "2";
    updateDisplay();
}

const btn3 = function(){
    holder += "3";
    updateDisplay();
}

const btn4 = function(){
    holder += "4";
    updateDisplay();
}

const btn5 = function(){
    holder += "5";
    updateDisplay();
}

const btn6 = function(){
    holder += "6";
    updateDisplay();
}

const btn7 = function(){
    holder += "7";
    updateDisplay();
}

const btn8 = function(){
    holder += "8";
    updateDisplay();
}

const btn9 = function(){
    holder += "9";
    updateDisplay();
}

const btnDot = function(){
    // quick check to disable button if holder already contains decimal
    if(holder.includes(".")){
        return
    }
    holder += ".";
    updateDisplay();
}

const btnClear = function(){
    wipeHolders();
    updateDisplay();
    total = undefined;
}

const btnAdd = function(){
    firstNumber = floatHolder;
    operator = add;
    wipeHolders();
    updateDisplay();
    // check if there was already a calculation, if so, current total becomes firstNumber for chaining
    if(total){
        firstNumber = total;
    }
}

const btnSubtract = function(){
    firstNumber = floatHolder;
    operator = subtract;
    wipeHolders();
    updateDisplay();
     // check if there was already a calculation, if so, current total becomes firstNumber for chaining
    if(total){
        firstNumber = total;
    }
}

const btnMultiply = function(){
    firstNumber = floatHolder;
    operator = multiply;
    wipeHolders();
    updateDisplay();
    // check if there was already a calculation, if so, current total becomes firstNumber for chaining
    if(total){
        firstNumber = total;
    }
}

const btnDivide = function(){
    firstNumber = floatHolder;
    operator = divide;
    wipeHolders();
    updateDisplay();
    // check if there was already a calculation, if so, current total becomes firstNumber for chaining
    if(total){
        firstNumber = total;
    }
}

const btnEquals = function(){
    secondNumber = floatHolder;
    total = calculate(firstNumber,secondNumber);
    document.getElementById("display").innerText=total;
    // wipe holder AFTER setting firstNumber
    wipeHolders();
    wipeVars();
}

const btnBoobies = function(){
    document.getElementById("display").innerText="✡︎";
}
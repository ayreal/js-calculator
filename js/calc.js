$(document).ready(function() {
  // call functions here
});

// define functions here

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;
const divide = (a, b) => a / b;

// const numberButtons = Array.from(document.querySelectorAll(".number"));
// const operatorButtons = Array.from(document.querySelectorAll(".operator"));
let numDisplay = document.getElementById("display");
let num1;
let operation;

Array.from(document.querySelectorAll(".number")).forEach(button => {
  button.addEventListener("click", () => {
    let num = button.innerHTML;
    numDisplay.innerHTML += num;
  });
});

// pressing an operator
// calls that fn with

Array.from(document.querySelectorAll(".operator")).forEach(button => {
  button.addEventListener("click", e => {
    num1 = numDisplay.innerHTML;
    numDisplay.innerHTML = "";
    operation = button.id;
    console.log(`Num is ${num1}, operation is ${operation}`);
    // let num2 = numDisplay.innerHTML;
    // numDisplay.innerHTML = num;
  });
});

document
  .getElementById("clear")
  .addEventListener("click", () => (numDisplay.innerHTML = "")); // also clear the number values

// every click adds a number to the end of the display of numbers
// when an operator is clicked, the value of that number is captured and added to ans and that operator will be used for the next fn
// every click adds a number to the end of the display of numbers
// when any operator is clicked, the val of that number is captured

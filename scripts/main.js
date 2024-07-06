console.log("Hi");

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

let number_1 = "";
let tempValue = "";
let operand = "";

function operate(number1, number2, operator) {
  switch (operator) {
    case "-":
      return subtract(number1, number2);
    case "+":
      return add(number1, number2);
    case "*":
      return multiply(number2, number1);
    case "/":
      return divide(number1, number2);
    default:
      console.log("Invalid operation");
      break;
  }
}

const display = document.querySelector(".display");
display.textContent = 0;

// setup numbers buttons to work with display
const numberButtons = document.querySelectorAll(".number");
let numberDone = false;

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!numberDone) {
      if (number_1.length > 8) {
        display.textContent = number_1;
      } else {
        number_1 += button.textContent;
        display.textContent = number_1;
      }
    }
  });
});

// setup clear button
const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  number_1 = "";
  operand = "";
  display.textContent = "";
});

// setup operator button
const operator = document.querySelectorAll("operator");

// Setup equals button
const equals = document.querySelector("equals");

equals.addEventListener("click", () => {});

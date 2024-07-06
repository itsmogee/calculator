console.log("Hi");

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

let number_1 = 0;
let number_2 = 0;
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

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    display.textContent = button.textContent;
  });
});

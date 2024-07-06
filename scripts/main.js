console.log("Hi");

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

let number_1 = "";
let tempValue = "";
let operand = "";
let minidisplay = "0";

function operate(number1, number2, operator) {
  switch (operator) {
    case "\u2212":
      return subtract(number1, number2);
    case "+":
      return add(number1, number2);
    case "×":
      return multiply(number2, number1);
    case "÷":
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
        mini_display.textContent += button.textContent;
      }
    }
  });
});

// setup clear button
const clear = document.querySelector(".clear");
const mini_display = document.querySelector(".mini-display");
mini_display.textContent = "";
clear.addEventListener("click", () => {
  number_1 = "";
  tempValue = "";
  operand = "";
  display.textContent = "";
  mini_display.textContent = "";
});

// setup operator button
const operators = document.querySelectorAll(".operator");
for (const operator of operators) {
  operator.addEventListener("click", () => {
    if (number_1 === "") {
      operand = operator.textContent;
      mini_display.textContent = mini_display.textContent.slice(
        0,
        mini_display.textContent.length - 1,
      );
      mini_display.textContent += operand;
      display.textContent = operand;
      return;
    }
    if (tempValue.length > 0) {
      tempValue = operate(
        Number.parseInt(tempValue),
        Number.parseInt(number_1),
        operand,
      ).toString();
      mini_display.textContent = tempValue;
    } else {
      tempValue = display.textContent;
    }
    operand = operator.textContent;
    mini_display.textContent += operand;
    number_1 = "";
    display.textContent = operand;
  });
}

// setup back button
const backButton = document.querySelector(".delete");
backButton.addEventListener("click", () => {
  if (number_1.length > 0) {
    number_1 = number_1.slice(0, number_1.length - 1);
    display.textContent = number_1;
    mini_display.textContent = mini_display.textContent.slice(
      0,
      mini_display.textContent.length - 1,
    );
  }
});

// Setup equals button
const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
  const num_1 = Number.parseInt(tempValue);
  if (Number.isNaN(num_1)) {
    display.textContent = number_1;
    return;
  }
  const num_2 = Number.parseInt(number_1);
  const result = operate(num_1, num_2, operand);
  display.textContent = result;
});

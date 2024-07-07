console.log("Hi");

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

let currentNumber = "";
let prevNumber = "";
let operand = "";

function operate(number1, number2, operator) {
  switch (operator) {
    case "\u2212":
      console.log(number1 + operator + number2);
      return subtract(number1, number2).toFixed(2);
    case "+":
      console.log(number1 + operator + number2);
      return add(number1, number2).toFixed(2);
    case "×":
      console.log(number1 + operator + number2);
      return multiply(number2, number1).toFixed(2);
    case "÷":
      console.log(number1 + operator + number2);
      return divide(number1, number2).toFixed(2);
    default:
      console.log("Invalid operation");
      break;
  }
}

const display = document.querySelector(".display");
display.textContent = 0;

// setup numbers buttons to work with display
const numberButtons = document.querySelectorAll(".number");

for (const button of numberButtons) {
  button.addEventListener("click", () => {
    // Limit number length to fit in UI
    if (currentNumber.length < 8) {
      currentNumber += button.textContent; // update the number
      display.textContent = currentNumber; // update the display to show the number
      mini_display.textContent += button.textContent; // update the minidisplay
    }
  });
}

// setup clear button
const clear = document.querySelector(".clear");
const mini_display = document.querySelector(".mini-display");
mini_display.textContent = "";
clear.addEventListener("click", () => {
  currentNumber = "";
  prevNumber = "";
  operand = "";
  display.textContent = "";
  mini_display.textContent = "";
});

// setup operator button
const operators = document.querySelectorAll(".operator");
for (const operator of operators) {
  operator.addEventListener("click", () => {
    if (currentNumber === "") {
      operand = operator.textContent;
      mini_display.textContent = mini_display.textContent.slice(
        0,
        mini_display.textContent.length - 1,
      );
      mini_display.textContent += operand;
      display.textContent = operand;
      return;
    }
    if (prevNumber.length > 0) {
      prevNumber = operate(
        Number.parseFloat(prevNumber),
        Number.parseFloat(currentNumber),
        operand,
      ).toString();

      // Remove trailing zero and represent number as int
      if (prevNumber.substring(prevNumber.length - 3) === ".00") {
        prevNumber = prevNumber.substring(0, prevNumber.length - 3);
      }
      mini_display.textContent = prevNumber;
    } else {
      prevNumber = display.textContent;
    }
    operand = operator.textContent;
    mini_display.textContent += operand;
    currentNumber = "";
    display.textContent = operand;
  });
}

// setup back button
const backButton = document.querySelector(".delete");
backButton.addEventListener("click", () => {
  if (currentNumber.length > 0) {
    currentNumber = currentNumber.slice(0, currentNumber.length - 1);
    display.textContent = currentNumber;
    mini_display.textContent = mini_display.textContent.slice(
      0,
      mini_display.textContent.length - 1,
    );
  }
});

// Setup equals button
const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
  const num_1 = Number.parseFloat(prevNumber);
  if (Number.isNaN(num_1)) {
    display.textContent = currentNumber;
    return;
  }
  const num_2 = Number.parseFloat(currentNumber);
  if (Number.isNaN(num_2)) {
    display.textContent = currentNumber;
    return;
  }
  let result = operate(num_1, num_2, operand).toString();

  // Remove trailing zero and represent number as int
  console.log(result);
  if (result.substring(result.length - 3) === ".00") {
    result = result.substring(0, result.length - 3);
  }
  console.log(result);
  console.log(result.length);
  if (result.length > 11) {
    display.textContent = "Number too long";
    return;
  }
  display.textContent = result;
});

// setup dot button
const dot = document.querySelector(".dot");
dot.addEventListener("click", () => {
  // Ignore consecutive periods and if periods are already in the string
  if (currentNumber.includes(".")) {
    return;
  }

  if (currentNumber.length > 0) {
    currentNumber += dot.textContent; // insert the period
    display.textContent = currentNumber; // update display
    mini_display.textContent += dot.textContent; // update mini-display
  }
});

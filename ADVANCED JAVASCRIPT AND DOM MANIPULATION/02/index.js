function add(num1, num2) {
  return num1 + num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function subtract(num1, num2) {
  return num1 - num2;
  //   return Math.abs(num1 - num2); returns absolute value of subtraction (positive value) if needed
}
function divide(num1, num2) {
  return num1 / num2;
}
function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

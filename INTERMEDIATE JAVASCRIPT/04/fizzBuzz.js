var output = [];
var arrNum = 1;

function fizzBuzz() {
  if (arrNum % 3 === 0 && arrNum % 5 === 0) {
    output.push("FizzBuzz");
  } else if (arrNum % 3 === 0) {
    output.push("Fizz");
  } else if (arrNum % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(arrNum);
  }

  arrNum++;
  return output;
}

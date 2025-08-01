function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆

  //Write your code here:
  //   only for test purpose
  //   if (n === 1) {
  //     return "0";
  //   }
  var output = [];

  if (n >= 1) {
    output[0] = 0;
  }
  if (n >= 2) {
    output[1] = 1;
  }

  for (var i = 2; i < n; i++) {
    output[i] = output[i - 1] + output[i - 2];
  }
  return output;

  //Return an array of fibonacci numbers starting from 0.

  //Do NOT change any of the code below 👇
}

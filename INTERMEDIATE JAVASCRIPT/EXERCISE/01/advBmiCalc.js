// BMI Calculator Advanced (IF/ELSE)
// Previously, we've created a function that is able to calculate the BMI. But once we get a result, we will want to tell the user what the number means.

// Write a function that outputs (returns) a different message depending on the BMI.

// BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."

// BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."

// BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."

// The message MUST be returned as an output from your function. You should NOT NEED to use alert, prompt or console.log in this challenge.

// IMPORTANT the message wording has to match precisely for the code to pass the validation. Including punctuation and capitalisation.

function bmiCalculator(weight, height) {
  var bmi = weight / Math.pow(height, 2);

  bmi = Math.round(bmi);

  if (bmi < 18.5) {
    var interpretation = `Your BMI is ${bmi}, so you are underweight.`;
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    interpretation = `Your BMI is ${bmi}, so you have a normal weight.`;
  }
  if (bmi > 24.9) {
    interpretation = `Your BMI is ${bmi}, so you are overweight.`;
  }

  return interpretation;
}

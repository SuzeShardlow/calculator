// open loop
// create prompt for which operator
// store operator in a variable
// decide what numbers to ask the user for
// start if statement with mortgage as it has the most variables
// ask for the three numbers and store each in a variable
// move onto raise to power as that requires different wording
// get base and power from user and store in two separate vars
// move onto square root as that only requires one input
// get number from the user and store in var
// then move onto + - * /
// ask user for first and second numbers and store in vars
// perform the calculation
// display the answer
// create alert to clear and start again or cancel
// if OK is pressed, run the loop again


var reset = true;
var num1;
var num2;
var op;
var principal;
var interest;
var payments;

while (reset) {

  op = prompt('Please choose what you want to do:\n\n+  add\n-  subtract\n*  multiply\n/  divide\npow  raise to the power of\n sqr  find the square root of, or\nmort  use the mortgage calculator.');

  if (op == 'mort') {
    principal = Number(prompt('What is the total amount borrowed (eg 100000)?'));
    interest = Number(prompt('What is the interest rate (eg type 2 if it is 2%)?'))/1200;
    payments = Number(prompt('How many payments do you need to make in total?'));
  } else if (op == 'pow') {
    num1 = Number(prompt('What is your number?'));
    num2 = Number(prompt('What would you like to raise ' + num1 + ' to the power of?'));
  } else if (op == 'sqr') {
    num1 = Number(prompt('What is your number?'));
  } else {
    num1 = Number(prompt('What is your first number?'));
    num2 = Number(prompt('What is your second number?'));
  }

  switch (op) {
    case '+':
      var result = (num1 + num2);
      break;
    case '-':
      result = (num1 - num2);
      break;
    case '*':
      result = (num1 * num2);
      break;
    case '/':
      result = (num1 / num2);
      break;
    case 'pow':
      result = Math.pow(num1, num2);
      break;
    case 'sqr':
      result = Math.sqrt(num1);
      break;
    case 'mort':
      result = principal*(((interest*((1+interest)^payments))/((1+interest)^payments))-1);
      break;
  }

  reset = confirm('The answer is ' + result + '. Press OK to reset and enter a new calculation, or Cancel to quit.');

}

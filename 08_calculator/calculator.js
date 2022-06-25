const add = function(num,numTwo) {
  return num + numTwo;
};

const subtract = function(num,numTwo) {
	return num - numTwo;
};

const sum = function(array) {
  return array.reduce((total,number) => {
   return total + number;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((total,number) => {
    return total*number;
  }, 1);
};

const power = function(base,exponent) {
	// return Math.pow(base,exponent);
  let product = 1;
  for (let i=0; i<exponent; i++) {
    product *= base;
  }
  return product;
};

const factorial = function(number) {
	let facto = 1;
  if (number === 0) return facto;
  while (number !== 1) {
    facto *= number;
    number--;
  }
  return facto;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

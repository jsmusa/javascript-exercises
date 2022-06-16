const ftoc = function(farenheit) {
  let celsius = (farenheit - 32)*(5/9);
  return Math.round(celsius*10)/10;
};

const ctof = function(celsius) {
  let farenheit = celsius*(9/5) + 32;
  return Math.round(farenheit*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

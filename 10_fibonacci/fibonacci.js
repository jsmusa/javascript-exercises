const fibonacci = function(number) {
    if (number < 0) return "OOPS";
    // initial values
    let first = 0;
    let second = 1;

    for (let i=0; i<number; i++) {
        let sum = first + second;
        first = second;
        second = sum;
    }
    return first;
};

// Do not edit below this line
module.exports = fibonacci;

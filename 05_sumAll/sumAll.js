const sumAll = function(num,numTwo) {
    //returns ERROR if num or numTwo is negative or not a number
    if (num <0 || numTwo<0 || typeof num !== "number" || typeof numTwo !== "number") {
        return "ERROR";
    }
    let sum = 0;
    //sums all numbers from num upto numTwo
    while (num !== numTwo) {
        sum += num;
        if (num>numTwo) num--;
        else num++;
    }
    //needs to add numTwo since loop breaks when num === numTwo
    return sum+numTwo;
};

// Do not edit below this line
module.exports = sumAll;

const repeatString = function(string,num) {
    let multiString = "";
    if (num >= 0) {
    for  (i=0; i<num; i++) {
        multiString += string;
    }
    } else {
        multiString = "ERROR";
    }
    return multiString;
}
// Do not edit below this line
module.exports = repeatString;

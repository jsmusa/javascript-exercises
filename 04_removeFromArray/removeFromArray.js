const removeFromArray = function(array, ...entries) {
    let newArray = array;
    for (const entry of entries) {
        function check(removedValue) {
            return removedValue !== entry; 
        }
        newArray = newArray.filter(check);
    }
    return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;

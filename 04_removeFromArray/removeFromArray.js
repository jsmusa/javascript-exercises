const removeFromArray = function(array, ...entries) {
    let newArray = array;
    for (const entry of entries) {
        /*function check(removedValue) {
            return removedValue !== entry; 
        }
        newArray = newArray.filter(check);*/
        for (let i=0; i<newArray.length; i++) {
            if (newArray[i] === entry) {
                newArray.splice(i,1);
            }
        }
    }
    return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;

const findTheOldest = function(array) {
    for (const element of array) {
        if (element.yearOfDeath === undefined) {
            element.yearOfDeath = new Date().getFullYear();
        } else continue;
    }
    const sorted = array.sort((first,second) => {
        return ((first.yearOfDeath - first.yearOfBirth) > (second.yearOfDeath - second.yearOfBirth) ? -1 : 1);
    });
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;

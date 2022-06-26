const palindromes = function (string) {
    // let newString = string.replace(/,|\.|\!| /g,"");
    let newString = string.replace(/[,.! ]/g,"");
    let reverse = "";
    for (let i = newString.length; i > 0; i--) {
        reverse += newString.slice(i-1,i); 
    }
    // return(newString);
    return newString.toLowerCase() === reverse.toLowerCase(); 
};

// Do not edit below this line
module.exports = palindromes;

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

// const palindromes = function(string) {
//     processedString = string.toLowerCase().replace(/[^a-z]/g, "");
//     return (
//       processedString
//         .split("")
//         .reverse()
//         .join("") == processedString
//     );
//  };

// Do not edit below this line
module.exports = palindromes;

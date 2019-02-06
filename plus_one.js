/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let i = digits.length - 1;
    do {
        if(digits[i] === 10){
            digits[i] -= 10
            i -= 1;
        }
        if(i === -1){
            digits.unshift(0);
            i = 0;
        }
        digits[i] += 1;
    } while(digits[i] === 10);
    return digits;
};
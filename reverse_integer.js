/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const negative = x < 0;
    let n = Math.abs(x);
    let result = 0;
    while(Math.floor(n/10) > 0){
        result *= 10;
        result = result + (n % 10);
        n = Math.floor(n/10);
    }
    result *= 10;
    result = result + (n % 10);
    if(result > (2**31 - 1) || result < -1*(2**31)) return 0;
    return negative ? result*(-1) : result;
};
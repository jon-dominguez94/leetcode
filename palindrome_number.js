/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0 || (x % 10 === 0 && x !== 0))
        return false;
    
    let mirror = 0;
    while(x > mirror){
        mirror *= 10
        mirror += x % 10;
        x =  Math.floor(x/10);
    }
    
    return x === mirror || x === Math.floor(mirror/10);
};
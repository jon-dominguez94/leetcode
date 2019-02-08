/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const letters = {
        '2': alphabet.slice(0,3).split(''),
        '3': alphabet.slice(3,6).split(''),
        '4': alphabet.slice(6,9).split(''),
        '5': alphabet.slice(9,12).split(''),
        '6': alphabet.slice(12,15).split(''),
        '7': alphabet.slice(15,19).split(''),
        '8': alphabet.slice(19,22).split(''),
        '9': alphabet.slice(22,26).split('')
    }
    

    let results = [""];
    
    digits.split('').forEach(num => {
        const newResults = []
        letters[num].forEach(letter => {
            results.forEach(combo => {
                newResults.push(combo + letter)
            })
        })
        results = newResults;
    })
    
   
    
    return results[0] === "" ? [] : results;
};
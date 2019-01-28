/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    let longest = "";
    let chars = new Set();
    
    for(let i = 0; i < s.length; i++){
        if(chars.has(s[i])){
            const newWord = [...chars].join('');
            const idx = newWord.indexOf(s[i]);
            longest = newWord.length > longest.length ? newWord : longest;
            chars = new Set(newWord.slice(idx + 1));
        }
        chars.add(s[i]);
        
    }
    const lastWord = [...chars].join('');
    longest = lastWord.length > longest.length ? lastWord : longest;
    return longest.length;
};
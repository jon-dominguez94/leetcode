/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    if(A.length !== B.length || A.length < 2)
        return false;
    if(A.length === 2){
        if(A === B)
            return A[0] === A[1]
    }
    const diffs = [];
    for(let i = 0; i < A.length; i++){
        if(A[i] !== B[i]){
            diffs.push(i);
            if(diffs.length > 2)
                return false;
        }
    }
    if(diffs.length === 0){
        const mid = Math.floor(A.length / 2);
        // if(A.length % 2 === 0){
            const first = A.slice(0, mid);
            let second = A.slice(mid, A.length);
            if(first === second){
                return true;
            } 
        // }
        
    }
    const newStr = A.slice(0, diffs[0]) + A[diffs[1]] + A.slice(diffs[0] + 1, diffs[1]) + A[diffs[0]] + A.slice(diffs[1] + 1, A.length);
    
    return newStr === B;
};
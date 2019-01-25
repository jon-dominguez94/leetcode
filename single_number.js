/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const seen = new Set();
    for(let i = 0; i < nums.length; i++){
        let val = nums[i];
        if(seen.has(val)){
            seen.delete(val);
        } else {
            seen.add(val);
        }
    }
    return seen.values().next().value
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const allNums = new Set();
    for(let i = 0; i <= nums.length; i++){
        allNums.add(nums[i]);
    }
    for(let i = 0; i <= nums.length; i++){
        if(!allNums.has(i))
            return i;
    }
    
};
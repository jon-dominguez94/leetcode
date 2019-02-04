/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0;
    let curr = nums[i];
    for(let j = 0; j < nums.length; j++){
        if(nums[j] !== curr){
            nums[i+1] = nums[j];
            curr = nums[j];
            i += 1;
        }
    }
    
    
    return i + 1;
};
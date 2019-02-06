/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    let count = 0;
    for(let j = 0; j < nums.length; j++){
        if(nums[i] !== val){
            i = j;
        } else {
            if(nums[j] !== val){
                [nums[i], nums[j]] = [nums[j], nums[i]]
                i+=1;
                count += 1;
            }
        }
    }
    if(nums[i] === val) count++;
    return count === 0 ? nums.length : i;
};
var twoSum = function(nums, target) {
    const seen = {}
    for(let i = 0; i < nums.length; i++){
        const pair = target - nums[i];
        if(seen.hasOwnProperty(pair)){
            return [seen[pair], i]
        }
        seen[nums[i]] = i;
    }
};
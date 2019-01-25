var checkPossibility = function(nums) {
    let error = false;
    let idx = null;
    
    for(let i = 1; i < nums.length; i++){
        if(nums[i] < nums[i - 1]){
            if(error === true) return false;
            error = true;
            idx = i;
        }
    }
    
    if(!error){
        return true;
    } else if(idx === 1 || idx === nums.length - 1){
        return true;
    } else {
       if(nums[idx - 1] <= nums[idx + 1]){
           return true;
       } else {
            return nums[idx] >= nums[idx-2];
       }
    }

};
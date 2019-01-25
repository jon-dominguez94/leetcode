/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      seen.delete(nums[i]);
    } else {
      seen.add(nums[i]);
    }
  }
  return seen.values().next().value
};
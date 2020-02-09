/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const duplicateChecker = new Set();
  for (let i = nums.length - 1; i >= 0; i--) {
    if (duplicateChecker.has(nums[i])) {
      nums.splice(i, 1);
    } else {
      duplicateChecker.add(nums[i]);
    }
  }
  return nums.length;
};
console.log(removeDuplicates([1, 1, 2]) === 2)
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]) === 5)
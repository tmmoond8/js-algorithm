/**
 * https://leetcode.com/problems/two-sum/
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * Example:

 * Given nums = [2, 7, 11, 15], target = 9,

 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [0, 1];
};

console.log([0, 1].toString() === twoSum([2, 7, 11, 15], 9).toString())
console.log([1, 2].toString() === twoSum([2, 7, 11, 15], 18).toString())
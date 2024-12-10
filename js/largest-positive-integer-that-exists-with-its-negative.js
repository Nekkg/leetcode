// https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
  let maxNum = -1
 

 for(i in nums){     
   
   if (nums[i] < 0){
     const reverseNum = Math.abs(nums[i])

     const found = nums.find((element) => element === reverseNum);

     if (found > maxNum){
       maxNum = found
     }
   }     
 }

 return maxNum
};
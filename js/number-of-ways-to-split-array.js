// https://leetcode.com/problems/number-of-ways-to-split-array
/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
  let leftSum = 0, iter = 0;
  const LENGTH = nums.length - 1

  let rightSum = nums.reduce(function(a, b){
    return a + b;
  }, 0);

  for (let j = 0; j < LENGTH ; j++){    

    leftSum = leftSum + nums[j]
    rightSum = rightSum - nums[j] 
        
    if(leftSum >= rightSum){
      iter++;
    }
  }
  
  return iter
};

let nums1 = [10,4,-8,7]
let nums = [2,3,1,0]

console.log(`Результат 1: ${waysToSplitArray(nums1)}`);
console.log(`Результат 2: ${waysToSplitArray(nums)}`);
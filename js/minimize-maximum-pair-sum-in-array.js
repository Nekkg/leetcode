// https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
	const sortedValues = nums.toSorted((a, b) => a - b);
	let maxSumOfMinPair = 0
	for (let i = 0; i <= sortedValues.length / 2; i++){
		if (sortedValues[i] + sortedValues[sortedValues.length - 1 - i] > maxSumOfMinPair){
			maxSumOfMinPair = sortedValues[i] + sortedValues[sortedValues.length - 1 - i]
		}
	}
	return maxSumOfMinPair
};
let nums  = [3,5,2,3];
let nums2  = [4,1,5,1,2,5,1,5,5,4]; // 8
console.log(minPairSum(nums));
console.log(minPairSum(nums2));

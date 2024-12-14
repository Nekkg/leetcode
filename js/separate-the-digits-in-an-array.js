// https://leetcode.com/problems/separate-the-digits-in-an-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
	const arr = [];

	for (let i in nums) {
		arr.push(...nums[i].toString().split("").map(Number));
	}

	return arr;
};

let nums1 = [7, 1, 3, 9];
let nums = [13, 25, 83, 77];

console.log(`Результат 1: ${separateDigits(nums1)}`);
console.log(`Результат 2: ${separateDigits(nums)}`);

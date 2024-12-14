// https://leetcode.com/problems/alternating-digit-sum/description/
/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
	let s = ([] = n.toString().split(""));
	let sum = 0;
	for (i in s) {
		if (i % 2 === 1) {
			s[i] = -Number(s[i]);
		} else {
			s[i] = Number(s[i]);
		}
		sum += s[i];
	}

	return sum;
};

let nums1 = 521;
let nums = 111;

console.log(`Результат 1: ${alternateDigitSum(nums1)}`);
console.log(`Результат 2: ${alternateDigitSum(nums)}`);

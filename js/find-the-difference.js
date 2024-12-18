// https://leetcode.com/problems/find-the-difference/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
	const arr1 = s.split("");
	let str2 = t

	for (let i = 0; i <= arr1.length; i++) {
		if (str2.includes(arr1[i])) {
			str2 = str2.replace(arr1[i], "");
		}
	}

	return str2;
};

let s = "abcd";
let t = "abcde";

console.log(`Result: ${findTheDifference(s, t)}`);

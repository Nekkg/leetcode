// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	let arrRes = [];
	if (digits === "") {
		return arrRes;
	}
	keyboard = {
		2: "abc",
		3: "def",
		4: "ghi",
		5: "jkl",
		6: "mno",
		7: "pqrs",
		8: "tuv",
		9: "wxyz",
	};

	let arrDig = digits.split("");

	let cur = "";

	function recurs(index) {
		if (index === arrDig.length) {
			arrRes.push(cur);
		} else {
			for (letter of keyboard[arrDig[index]]) {
				cur += letter;
				recurs(index + 1);
				cur = cur.substring(0, cur.length - 1);
			}
		}
	}

	recurs(0);

	return arrRes;
};

let digits = "234";

console.log(`Результат 1: ${letterCombinations(digits)}`);

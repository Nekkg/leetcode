// https://leetcode.com/problems/count-items-matching-a-rule/

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
	let count = 0;
	let num = 0;

	switch (ruleKey) {
		case "type":
			num = 0;
			break;
		case "color":
			num = 1;
			break;
		case "name":
			num = 2;
			break;
		default:
			console.log("Error");
	}

	for (let item of items) {
		if (item[num] === ruleValue) {
			count++;
		}
	}

	return count;
};

let items = [
	["phone", "blue", "pixel"],
	["computer", "silver", "phone"],
	["phone", "gold", "iphone"],
];
let ruleKey = "type";
let ruleValue = "phone";
console.log(countMatches(items, ruleKey, ruleValue));

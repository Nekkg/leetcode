// https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word

/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
	let count = 0;

	for (let pattern of patterns) {
			if (word.includes(pattern)) {
					count++;
			}
	}

	return count;
};


console.log(numOfStrings(["a", "abc", "bc", "d"], "abc")); 
console.log(numOfStrings(["a", "b", "c"], "aaaaabbbbb"));

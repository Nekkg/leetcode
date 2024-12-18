// https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	let words = s.trim().split(" ");
	const lastElement = words[words.length - 1];
	return lastElement.length;
};

s = "   fly me   to   the moon  "

console.log(`Результат 1: ${lengthOfLastWord(s)}`);

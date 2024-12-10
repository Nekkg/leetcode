// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  let splitS = s.split('')

for (i in splitS){
if (t.includes(splitS[i])){
  t = t.replace(splitS[i], '')
}
}

return t.length
};
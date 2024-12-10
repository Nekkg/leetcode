// https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/
/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
  const arr = s.split('')    
  for (let i = 0; i <= arr.length; i ++){     
    if(arr[i] === 'b' & arr[i + 1] === 'a'){
      return false
    }
  }
  return true
};
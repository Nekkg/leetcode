// https://leetcode.com/problems/number-of-burgers-with-no-waste-of-ingredients/
/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 */
var numOfBurgers = function(tomatoSlices, cheeseSlices) {
  if (tomatoSlices % 2 != 0){
    return []
  } 

  let x = tomatoSlices / 2 - cheeseSlices
  let y = cheeseSlices - x

  if (x < 0 || y < 0){
    return []
  }
  
  return [x, y]
};
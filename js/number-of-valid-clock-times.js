// https://leetcode.com/problems/number-of-valid-clock-times/

/**
 * @param {string} time
 * @return {number}
 */
var countTime = function(time) {
    
  const hours = time.split(':')[0]
  const minutes = time.split(':')[1]

  let indexHours = hours.indexOf("?")    
  let hoursVariables = 1

  if (indexHours != -1){
    let hoursNumber = 0
    if (indexHours === 1){
      hoursNumber = Number(hours.charAt(0) + 0)
      hoursVariables = 10
      if(Number(hours.charAt(0)) == 2){
        hoursVariables = 4
      }
    } else{
      hoursVariables = 2        
      if(Number(hours.charAt(1)) < 4){
        hoursVariables = 3
      }
    }
  }

  if ((hours.charAt(0) === '?') & (hours.charAt(1) === '?')){
    hoursVariables = 24
  }

  let indexMinutes = minutes.indexOf("?")
  let minutesVariables = 1
  
  if (indexMinutes != -1){
    let hoursNumber = 0
    if (indexMinutes === 1){
      hoursNumber = Number(minutes.charAt(0) + 0)
      minutesVariables = 10
    } else{
      minutesVariables = 6
    }
  }

  if ((minutes.charAt(0) === '?') & (minutes.charAt(1) === '?')){
    minutesVariables = 60
  }

  return hoursVariables * minutesVariables
};
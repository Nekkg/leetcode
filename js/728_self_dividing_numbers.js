// 728. Self Dividing Numbers
function selfDividingNumbers(left, right) {
  const arr = []
  for (let i = left; i <= right; i++){
    let isDivision = true;
    let currentNumber = (""+i).split("").map(Number)
    console.log(currentNumber);
    
    for(let j = 0; j < currentNumber.length; j++){ 
      console.log("i = " + i);
      console.log("Цифра из i = " + Number(currentNumber[j]));
      
      console.log(i % Number(currentNumber[j]));
      
      if (!(i % Number(currentNumber[j]) === 0)){
        isDivision = false
        break
      }      
      if(j + 1 === currentNumber.length && isDivision){
        arr.push(i)
      }
    }
  }
  
  return arr
}

// selfDividingNumbers(10, 12)






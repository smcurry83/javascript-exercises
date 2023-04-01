const sumAll = function(num1, num2) {

  const numbers = [num1, num2];
  let error = "ERROR";

  if (num1 < 0 || num2 < 0 || typeof num1 != "number" ||  typeof num2 != "number") { 
    return error;
  } else {
    let total = 0;
    numbers.sort(function(a, b){return a-b});

    for (let i = numbers[0]; i <= numbers[1]; i++) {
      total += i;
    }
  
    return total;
  }

};

// Do not edit below this line
module.exports = sumAll;

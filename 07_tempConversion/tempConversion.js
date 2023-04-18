const convertToCelsius = function(fahrenheit) {
  const temp = fahrenheit;
  let celsiusTemp = 0;
  
  celsiusTemp = (temp - 32) * (5/9);

  if (celsiusTemp % 1 != 0) {
    return parseFloat(celsiusTemp.toFixed(1));
  } else {
    return celsiusTemp;
  }
  
};

const convertToFahrenheit = function(celcius) {
  const temp = celcius;
  let fahrenheitTemp = 0;

  fahrenheitTemp = (temp * (9/5)) + 32;
  
  if (fahrenheitTemp % 1 != 0) {
    return parseFloat(fahrenheitTemp.toFixed(1));
  } else {
    return fahrenheitTemp;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

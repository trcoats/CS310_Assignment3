function convertCelsiusToFahrenheit(celsius){
    var fahrenheitTemp = (celsius*1.8) + 32;
    return fahrenheitTemp;
}

function convertFahrenheitToCelsius(fahrenheit){
    var celsiusTemp = (fahrenheit-32) * (5/9);
    return celsiusTemp;
}

document.write(convertCelsiusToFahrenheit(100) + "\n\n");
document.write(convertFahrenheitToCelsius(212));
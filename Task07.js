function celsiusToFahrenheit(tempInCelsius){
var tempFahrenheit = tempInCelsius * 1.8 + 32;   //converting celsius to Fahrenheit
console.log(tempInCelsius + " degrees celsius = "+ tempFahrenheit + " degrees fahrenheit");
}celsiusToFahrenheit(5);


function fahrenheitToCelsius(tempInFahrenheit){
    var tempCelsius = (tempInFahrenheit - 32)*5/9 // converting fahrenheit to celsius
    console.log(tempInFahrenheit + " degrees Fahrenheit = "+ tempCelsius + " degrees Celsius");
}fahrenheitToCelsius(41);



function hoursAndMinutes(number){
var number;
let hours = Math.floor(number/60); //rounds number downwards to the nearest interger
let minutes = number % 60;

console.log(number + " = " + hours + " hour/s and " + minutes + " minute/s");
}hoursAndMinutes(15);
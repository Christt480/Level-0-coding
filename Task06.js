//var num1 = maximumNumber(2,25,16);

//function maximumNumber(num1, num2, num3) { //checking maximum number from 3 numbers  
  //  var max = num1;
   // if (num2 > max) {
 //       max = num2;
 //   }
//    if (num3 > max) {
 //       max = num3;
 //   }
 //   return max;
//}

var num1 = maxOfMultipleNumbers(8,525,615,46,334);
function maxOfMultipleNumbers(num1) {
    var max = num1;

    for (i = 0; i < arguments.length; i++)
    {
        if (arguments[i] > max) { // checking maximum number from N number of inputs
            max = arguments[i];
        }

        
    }console.log("maximum number is: " + max);
}
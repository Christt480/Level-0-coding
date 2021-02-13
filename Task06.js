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
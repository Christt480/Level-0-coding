function commonLetters(string1,string2){

    for(let i = 0; i < string1.length; i++){  
       for (let j = 0; j < string2.length; j++){
           var letter1 = string1[i];
           var letter2 = string2[j];
           if(letter1.toUpperCase() == letter2.toUpperCase()){ //converting characters in a string to uppercase.
                console.log(letter1);
           }
        }
       }
       
       
}commonLetters("CHRIS","christopher");
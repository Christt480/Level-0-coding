function commonLetters(string1,string2){
    var str1 = string1.toLowerCase();
    var str2 = string2.toLowerCase();
    
          for (var i = 0; i < str1.length; i++){
              if(str2.indexOf(str1[i]) != -1){ //checking for common characters in two strings
                console.log(str1[i]);
               
             }
            }
        
   }commonLetters("chrisen","CHRISTOPHER");
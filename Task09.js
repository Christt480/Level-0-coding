function printVowels(string){
for (i = 0; i < string.length; i++){
    var vowels = string[i].toLowerCase(); //converting string to lowercase 
    if(vowels === "a" || vowels === "e" || vowels === "i" || vowels === "o" || vowels === "u"){
      console.log(vowels);
    }
}
}printVowels("chris");
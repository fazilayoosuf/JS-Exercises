function gfg(str,letter) { 

    var letter_Count = 0;
    for (var i = 0; i < str.length; i++) 
    {
       if (str.charAt(i) == letter) 
         {
         letter_Count += 1;
         }
     }
     return letter_Count;
   }
  

console.log(gfg("Hello",'l'));
console.log(gfg("Hello",'e'));
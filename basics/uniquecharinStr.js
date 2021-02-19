function uniqueCahInString(str){

   var splittedStr=str.split('');
   var unique= new Set(splittedStr);
   return unique;

}

console.log(uniqueCahInString('aabbccd'))
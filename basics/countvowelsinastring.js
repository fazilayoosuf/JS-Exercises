
function countVowels(str,letter=['a','e','i','o','u']){

    var splittedStr = str.split('');

    var count=0;
    var i=0;

    splittedStr.filter(function(s){
      if(letter.indexOf(s)!==-1)
      count++
    })

    return count;



}

console.log(countVowels('fazi'))
console.log(countVowels('sirajdeen'))


function strInAlphaOrder(str){
    var splitStr =str.split('');
  var res = splitStr.sort((a,b)=>a>b?1:-1)
   var joinstr=res.join('');
    
   return joinstr;
    
    
}

console.log(strInAlphaOrder('fazi'))
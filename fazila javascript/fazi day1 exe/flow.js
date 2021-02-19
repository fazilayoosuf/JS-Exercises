var substractByOne= function(a){
    return a+a;
  };

  
  var addByTwo= function(c){
    return c*c;
  };
  
var funsArray=[substractByOne,addByTwo];

 function flow(f){
  
   
  var flowFunctionResult = f=>x=>f.reduce((acc,itr)=>itr(acc),x);
  
  
  var result = flowFunctionResult(f)(2);
 
  
  console.log("Result: "+result);

  return result;
 }

 console.log(flow(funsArray));
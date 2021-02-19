function largestEvenNum(arr){
    var res=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2==0){
        res.push(arr[i]);
      

        }
    }
   
 return   Math.max(...res);
}

console.log(largestEvenNum([2,5,7,8]))
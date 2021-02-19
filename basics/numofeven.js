function countEven(arr){
var count =0
arr.filter(function(a){
    if(a%2==0){
        count= count+1;
    }
    })
 return count;
}
console.log(countEven([1,2,3,4,5,6,8]))
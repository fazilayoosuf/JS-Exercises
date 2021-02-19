

function isAscOrder(arr){
   
    return  arr.sort(function(a,b){
            return (a-b);
        });
}

function isDescOrder(arr){
   
    return  arr.sort(function(a,b){
            return (b-a);
        });
}
console.log(isDescOrder([6,4,5,3,8]))
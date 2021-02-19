var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3,3,3];
  

 function freqItem(arr){
    return arr.sort((a,b) =>
  
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
}

console.log(freqItem(arr1))
 

var arr=[3,21,23,22,10,127,124,'v','X','Z','a','Zebra','zion']

var res =arr.sort();

console.log(res)


// number cap small

// higher order function
 


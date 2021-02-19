
// function findRowCol(slot){
//     var rows=[];
//     var col;
//     var slot;
//     var slotNum=0;
//     var count=0;
//     for(var i=0;i<rows.length;i++){

//         slot=rows[i]
//     }

// }

// console.log(findRowCol(34));


function rowColumnCount(input){
    let count =0;
    let rowCount=1;
    let columnCount = 0;
for (let i = 0; i < input; i++) {
    count++;
    if (count%6==0) {
       rowCount ++
       columnCount= input- count;
       if (columnCount===0) {
        rowCount--;
         columnCount=6;
       }
       else{
           rowCount+1;
       }
    }
    else{
        columnCount+=1;
    }
}
return rowCount;
}
var result= rowColumnCount(7)
console.log(result)


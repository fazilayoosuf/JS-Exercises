const names = ['fazi', 'yasmeen', 'siraj', 'shafi'];
function filter2(array,cb){
    var resultArray =[];
    for(let i=0;i<array.length;i++){
        let store = names[i];
        let h=cb(store);
      if(h){
      resultArray.push(store);
      }
    }
  return resultArray;
}
let result = filter2(names,(cb)=>{
    return cb.includes("ee");
})
console.log(" Name includes \"ee\" in the name array :", result)
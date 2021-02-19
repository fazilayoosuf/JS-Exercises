

function closeTo100(a,b){
    if((100-a)<(100-b)){
        return a;
    }
    return b;
}
console.log(closeTo100(99,1));
console.log(closeTo100(66,74));
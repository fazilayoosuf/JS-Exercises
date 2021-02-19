

function makeNewString(str){
    if(str.length<3){
         str=str
    }
    else{
        str=str.slice(0,3) + str.slice(-3)
    }
    return str;
}

console.log(makeNewString('abcdefghi'))
console.log(makeNewString('abcd'))
console.log(makeNewString('ab'))



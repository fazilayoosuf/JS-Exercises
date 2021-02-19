function replaceDigitWithDollar(str){
    str=str.replace(/[0-9]/g,'$')
    return str;

}

console.log(replaceDigitWithDollar('abc123'))
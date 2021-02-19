

function addNewString(str){

    if(str.indexOf('New!')===0){
        return str;
    }

    return `New! ${str}`
}

console.log(addNewString('employee'));
console.log(addNewString('New!worker'));
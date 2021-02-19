var data = {1: 'one',2: 'two',3: 'three' };
​
​
​
function transform(data) {
    let resultField = [];
    for (let i in data) {  
        let key=data[i];
        let value=i;
        
        let obj={};
        obj[key]=value;
       
        resultField.push(obj);
       
    }
    return resultField;
​
}
​
console.log(transform(data));
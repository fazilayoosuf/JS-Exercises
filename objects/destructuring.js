//Object.entries(obj)=>This method returns an array of the given object's own enumerable property [key, value] pairs.



var employee={
    name:'fazi',
    age:28,
    salary:15000
};

var objEntry=Object.entries(employee);

console.log(objEntry);
// [ [ 'name', 'fazi' ], [ 'age', 28 ], [ 'salary', 15000 ] ]

objEntry.forEach(function([key,value]){
    console.log(key,value)
//name fazi
//age 28
//salary 15000
})

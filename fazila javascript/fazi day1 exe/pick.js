
 var obj={
    name: 'shafi',
    age: '32',
    id: 123,
    designation:'developer'
}

arrays=['name', 'age'];

function pick(obj, arrays) {

	
	var picked = {};
	arrays.forEach(function(prop) {
		picked[prop] = obj[prop];
	});

	return picked;

};

console.log(pick());
//Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
//Sample object:

var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

function listProp(){
    for(prop in student){
        console.log(prop);
    }
}

listProp();

//Write a JavaScript program to delete the rollno property from the following object. 
//Also print the object before or after deleting the property.

delete  student.rollno;

console.log(student)

//Write a JavaScript program to get the length of a JavaScript object.


var length = Object.keys(student).length;
console.log(length);



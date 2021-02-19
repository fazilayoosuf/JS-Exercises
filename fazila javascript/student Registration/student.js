var selectedRow=null;

function onFormSubmit(e){
    event.preventDefault();
    var formdata=readFormData();
   if(selectedRow==null){
    showtask(formdata);
   }else{
       updateRecord(formdata);
   }
    
    resetForm();

}

 function readFormData(){

  var studObj={};

  studObj['name']=document.getElementById("name").value;
  studObj['age'] =document.getElementById("age").value;
  studObj['class']=document.getElementById("class").value;
  studObj['fees'] =document.getElementById("fees").value;

  return studObj;
   
};



// showtask
function showtask(data){
   
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.name;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.age;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.class;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.fees;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<a href="#" onClick='onEdit(this)'>Edit</a>
                        <a href="#" onClick='onDelete(this)'>Delete</a>`;
}

function resetForm(){
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('class').value = '';
    document.getElementById('fees').value = '';
   
}

// For Edit operation
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('name').value = selectedRow.cells[0].innerHTML;
    document.getElementById('age').value = selectedRow.cells[1].innerHTML;
    document.getElementById('class').value = selectedRow.cells[2].innerHTML;
    document.getElementById('fees').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.age;
    selectedRow.cells[2].innerHTML = formData.class;
    selectedRow.cells[3].innerHTML = formData.fees;
}

function onDelete(td){
    if(confirm('Are you sure you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('studentList').deleteRow(row.rowIndex);
        resetForm();
    }    
}
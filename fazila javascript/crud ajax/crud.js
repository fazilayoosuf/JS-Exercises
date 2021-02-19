
var data  = [];
function getData(){
    var getInfo=new XMLHttpRequest();

    getInfo.onreadystatechange=function(){
        if(getInfo.readyState==4 && getInfo.status==200){
            data=JSON.parse(getInfo.response);
            displayData(data);
        }
    }

    getInfo.open('GET','http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true',true);
    getInfo.send();

}


getData();


function postData(){

   
        var putInfo = new XMLHttpRequest();
        putInfo.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            data=JSON.parse(this.responseText);
            console.log(data);

            displayData(data); 
          }
        };
        putInfo.open("POST", "http://www.filltext.com/?rows=11&fname={firstName}&lname={lastName}&retty=true", true);
        putInfo.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        var input = JSON.stringify({
              "fname": "fazi",
              "lname": "siraj",
                });
            putInfo.send(input);
        console.log(putInfo);
      }
postData();

function displayData(data){


    document.getElementById('tablevalue').innerHTML ="";
    for(i=0;i<data.length;i++){

        var createRow =document.createElement('tr');
        for(a in data[i]){
            // create column for eavh property in the object

            var createCol = document.createElement('td');
            createCol.innerHTML = data[i][a];
            createRow.appendChild(createCol);
        }

        var editCol =document.createElement('td');
        var editBtn = document.createElement('button');
        editBtn.setAttribute("onclick","editUser("+ i + ")");
        editBtn.innerHTML="Edit";
        editBtn.style.backgroundColor="green";
        editCol.appendChild(editBtn);
        createRow.appendChild(editCol);

        var delCol = document.createElement('td');
        var delBtn = document.createElement('button');
        delBtn.setAttribute("onclick","deleteUser("+ i +")");
        delBtn.style.backgroundColor="red";
       
        delBtn.innerHTML="Delete";
        delCol.appendChild(delBtn);

        createRow.appendChild(delCol);
        document.getElementById('tablevalue').appendChild(createRow);
    }
}

function createUser(){
    var newObj={
        fname:document.getElementById('fname').value,
        lname:document.getElementById('lname').value
    };
    data.push(newObj);
    displayData(data);
}


function editUser(i){
    index=i;
    for(a in data[i]){
        document.getElementById(a).value=data[i][a];
    }
}

function  updateUser(){
    var newObj=data[index];
    for(a in newObj){
        newObj[a]=document.getElementById(a).value;

    }

    
    
   data[index]=newObj;
    displayData(data);


  
}


function deleteUser(i){
alert("are u sure");
    data.splice(i,1);
    displayData(data);
}
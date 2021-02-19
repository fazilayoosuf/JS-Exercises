
const empForm = document.getElementById('empForm');
const empName = document.getElementById('empName');
const empMail = document.getElementById('empMail');
const empDesgn = document.getElementById('empDesgn');
const empSalary = document.getElementById('empSalary');
const submit = document.getElementById('submit')
const edit = document.getElementById('edit');
const tableList = document.getElementById('tablelist');


class Employee{
    constructor(id,name,email,desgn,salary){
        this.id=id;
        this.name=name;
        this.email=email;
        this.desgn=desgn;
        this.salary=salary;
    }


    showData(){

        Employee.showHtml(this.id,this.name,this.email,this.desgn,this.salary)
        
       return this;
    
    }
        storeEmployee(){

             
            const storeData=JSON.parse(localStorage.getItem('employees')) ?? [] ;
            storeData.push({id:this.id,name:this.name,email:this.email,desgn:this.desgn,salary:this.salary});
            localStorage.setItem("employees",JSON.stringify(storeData));5

        }

        static showAllEmployees(){
            if(localStorage.getItem("employees")){

                JSON.parse(localStorage.getItem("employees")).forEach((item)=>{
                    Employee.showHtml(item.id,item.name,item.email,item.desgn,item.salary)
                })
            }
        }

        updateEmployee(id){

            const newItem ={id:id,name:this.name,email:this.email,desgn:this.desgn,salary:this.salary}

            const updateData=JSON.parse(localStorage.getItem("employees")).map((item)=>{
                if(item.id===id){
                    return newItem;
                }
                return item;
            })

            localStorage.setItem("employees",JSON.stringify(updateData))
        }

        static showHtml(id,name,email,desgn,salary){

            const row=document.createElement('tr');

            row.innerHTML =
    
                `<tr >
                <td>${id}</td>
                <td>${name}</td>
                <td>${email}</td>
                <td>${desgn}</td>
                <td>${salary}</td>
                <td><button class="btn btn-info edit" data-id="${id}">Edit</button></td>
                <td><button class="btn btn-danger  delete " data-id="${id}">Delete</button></td>
             
                </tr>`
    
                tableList.appendChild(row);
                
        }


    }

    Employee.showAllEmployees();
 

empForm.addEventListener('submit',function(e){
   e.preventDefault();

   
   let id=Math.floor(Math.random() *100000);
    const newEmp = new Employee(id,empName.value,empMail.value,empDesgn.value,empSalary.value);
    newEmp.showData().storeEmployee();

    empName.value="";
    empMail.value="";
    empDesgn.value="";
    empSalary.value="";

   

   });
edit.addEventListener('click',function(e){
    const id=edit.value;

    const updateEmp=new Employee(id,empName.value,empMail.value,empDesgn.value,empSalary.value)
    updateEmp.updateEmployee(id);
    submit.value="update this Employee";
    tableList.innerHTML="";
    Employee.showAllEmployees();
 

})
    


tableList.addEventListener('click',function(e){

    if(e.target.classList.contains("delete")){

        // remove from Local storage

        let id =+e.target.getAttribute("data-id");
        let item= JSON.parse(localStorage.getItem("employees")).
        filter(item => item.id !=id);
        localStorage.setItem("employees",JSON.stringify(item));

        // remove from UI
        e.target.parentElement.parentElement.remove();

    }
})


tableList.addEventListener('click',function(e){

    if(e.target.classList.contains("edit")){

        let id =+e.target.getAttribute("data-id");
         let item= JSON.parse(localStorage.getItem("employees")).
         find(item => item.id===id);

         console.log(item);

         empName.value=item.name;
         empMail.value=item.email;
         empDesgn.value =item.desgn;
         empSalary.value=item.salary;
         edit.value=id;
         submit.value="Edit Employee"
    
          

         
         
    }
});



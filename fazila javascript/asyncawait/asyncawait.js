/*
async function Myfunc(){
    

    const promise = new Promise(function(resolve, reject) {
        setTimeout(()=>
    resolve("hello"),2000)
         
    });
    const res =await promise;
    return res;
   
}

 Myfunc()
    .then(a => console.log(a));

*/

    async function getUsers(){

        const response = await fetch("https://jsonplaceholder.typicode.com/users")
         const data =await response.json();
         return data;
    }

    getUsers()
        .then(users=>console.log(users));
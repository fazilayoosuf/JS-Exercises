

const http =new EasyHttp;
/*
http.get('https://jsonplaceholder.typicode.com/users')
    .then(data=>console.log(data))
    .then(err=>console.log(err))
*/

 const data ={
     name:'fathima',
     username:'fathimayoosuf',
     email:"fazila@yoosuf"
 }


 // create post

 http.post('https://jsonplaceholder.typicode.com/users',data)
 .then(data => console.log(data))
 .catch(err=>console.log(err))

 

 // update post

  http.put('https://jsonplaceholder.typicode.com/users/2',data)
  .then(data => console.log(data))
  .catch(err=>console.log(err))
 


  // delete post


  http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data=>console.log(data))
    .catch(err => console.log(err))
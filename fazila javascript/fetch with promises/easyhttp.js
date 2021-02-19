

class EasyHttp {
  
  // Make an http get request
    get(url){
   return new Promise((resolve,reject)=>{

    fetch(url)
     .then(res => res.json())
     .then(data => resolve(data))
     .then(err => reject(err))

   })  
    }

    // make an http post request
    
    post(url,data){
      return new Promise((resolve,reject)=>{

        fetch(url,{
          method:'POST',
          headers: {
            'content-type':'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))

      });
    }

    // make an http put request

    put(url,data){
      return new Promise((resolve,reject)=>{
        fetch(url,{
          method:'PUT',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
      });
    }
  // make a http delete request

  delete(url){
    return new Promise((resolve,reject)=>{
      fetch(url)
      .then(()=>resolve('resource deleted'))
      .catch(err => reject(err))
    })
  }
}
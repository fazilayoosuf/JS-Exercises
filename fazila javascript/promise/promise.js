var promise = new Promise(function(resolve, reject) { 
    const x = "fazi"; 
    const y = "faz";
    if(x === y) { 
        resolve(); 
    } else { 
        reject(); 
    } 
    }); 
    
    promise
    .then(function () { 
            console.log('Success, You are correct'); 
        })
    .catch(function () { 
            console.log('Some error has occured'); 
        }); 
    
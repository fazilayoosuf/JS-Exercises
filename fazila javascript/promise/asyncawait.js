// async returns promise
//await  makes the code wait until the promise returns a result
const getData = async function() { 
    var y = await "Hello World"; 
    console.log(y); 
} 
  
console.log(1); 
getData(); 
console.log(2);

async function firstAsync() {
    let promise = new Promise((res, rej) => {
        setTimeout(() => res("Now it's done!"), 1000)
    });

    // wait until the promise returns us a value
    let result = await promise; 
  
    // "Now it's done!"
    console.log(result);
    }

firstAsync();
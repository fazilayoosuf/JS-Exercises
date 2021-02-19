const fs = require("fs")
const arg = process.argv;

function readFiles(dir,mycheck) {
    // read directory
    fs.readdir(dir, (error, fileNames) => {
      if (error) throw error;
      
    let min = fileNames[0], max = fileNames[0]

    for (let i = 1; i < fileNames.length; i++) {
      let value = fileNames[i]
      min = (value < min) ? value : min
      max = (value > max) ? value : max
    }

    fileObj={
        max:max,
        min:min
    }
    stringifyData = JSON.stringify(fileObj);

  
console.log(stringifyData);
fs.writeFile("mycheck.txt", stringifyData, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});

  })
  
 

}


readFiles(arg[2],arg[3]);
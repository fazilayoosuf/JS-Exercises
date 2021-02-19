
function getFileNameExtension(str){
    var res=str.slice(str.lastIndexOf('.'));
    return res;

}
console.log(getFileNameExtension('index.html'))
console.log(getFileNameExtension('config.json'))
console.log(getFileNameExtension('script.js'))
console.log(getFileNameExtension('style.css'))
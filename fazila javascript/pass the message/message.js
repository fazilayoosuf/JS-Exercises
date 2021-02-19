const sendBtn = document.getElementById('sendBtn');
const inputMsg = document.getElementById('inputMsg');
const outputMsg = document.getElementById('outputMsg');

sendBtn.addEventListener('click',sendMsg);

function sendMsg(){

    let content = inputMsg.value;

    if(content === ""){
        alert("please enter a valid message");
    }

    outputMsg.innerHTML=content;

    inputMsg.value="";
}
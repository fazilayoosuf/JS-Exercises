let counter =document.getElementById('counter');
const lowerCountBtn = document.getElementById('lowerCountBtn');
const addCountBtn = document.getElementById('addCountBtn');

let count =0;
addCountBtn.addEventListener('click',incrementCounter);

function incrementCounter(){

    count++;
    counter.innerHTML=count;

    if(counter.innerHTML>'0'){
        counter.style.color="green";
    }
    else if(counter.innerHTML==='0'){
        counter.style.color==='red';
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:1000,fill:"forwards"})

}

lowerCountBtn.addEventListener('click',decrementCounter);

function decrementCounter(){
    count--;
    counter.innerHTML=count;
    if(counter.innerHTML<'0'){
        counter.style.color='yellow';
    }
    else if(counter.innerHTML ==='0'){
        counter.style.color="red";
    }
    counter.animate([{opacity:'0.2'},{opacity:'1.0'}],{duration:1000,fill:"forwards"})

}
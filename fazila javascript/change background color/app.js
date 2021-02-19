colorBtn=document.querySelector('.colorBtn');
body=document.querySelector('body');

let colors=['red','green','yellow','pink','violet','purple'];

colorBtn.addEventListener('click',getBackgroundColor);

function getBackgroundColor(){

    let random=Math.floor(Math.random()*colors.length);

    body.style.background=colors[random];
}
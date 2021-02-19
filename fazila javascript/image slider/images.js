const images=document.querySelector('.images');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');


let counter=0;

nextBtn.addEventListener('click',nextSlide);

function nextSlide(){
    images.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:"forwards"});

    if(counter===5){
        counter=0;
    }
    counter++;
    images.style.backgroundImage=`url(img/img${counter}.jpeg`;

}

prevBtn.addEventListener('click',prevSlide);

function prevSlide(){
     images.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000,fill:"forwards"});
  
    if(counter===0){
        counter=6;
    }
    counter--;
    images.style.backgroundImage=`url(img/img${counter}.jpeg`;

}
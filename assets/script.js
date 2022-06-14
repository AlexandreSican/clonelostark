const video1 = document.querySelector('.video1');
const video2 = document.querySelector('.video2');
const video3 = document.querySelector('.video3');
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const img3 = document.querySelector('.img3');
const main = document.querySelector('.main');
const clickVideo1 = document.querySelector('.main-video');
const fecharVideo1 = document.querySelector('.fa-thin');


video1.addEventListener('click', ()=>{
    
    
    clickVideo1.style.display = 'block'
});

fecharVideo1.addEventListener('click', ()=>{
    
    clickVideo1.style.display = 'none'
    
});
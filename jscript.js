let imgs=document.querySelectorAll('.img');
let imgbig=document.querySelector('.imgbig');
let x='open';

for (let i = 0; i < imgs.length; i++) {
   imgs[i].addEventListener('click', ()=>{
let a=imgs[i].getAttribute('src');
let b=imgbig.getAttribute('src');
imgs[i].setAttribute('src',b);
imgbig.setAttribute('src',a);
   })
}
imgbig.addEventListener('click', ()=>{
    
    if (x=='open'){
    imgbig.style.transform='scale(150%)';
    x='close';
   }
   else if (x=='close'){
    imgbig.style.transform='scale(100%)';
    x='open';
   }
})
let arrow=document.querySelectorAll('i');
for (let y = 0; y < arrow.length; y++) {
    arrow[y].addEventListener('click', ()=>{
        for (let i = 0; i < imgs.length; i++) {
         let a=imgs[i].getAttribute('src');
         let b=imgbig.getAttribute('src');
         imgs[i].setAttribute('src',b);
         imgbig.setAttribute('src',a);
         }
    })
}
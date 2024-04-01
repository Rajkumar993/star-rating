const btns=document.querySelectorAll('.btn');
const para=document.getElementById('para')
btns.forEach((btn,index)=>{
  btn.addEventListener('click',()=>{
    para.innerHTML=`${btn.dataset.star} of 5`;
    btns.forEach((star,i)=>{
   if(index>=i){
    star.innerHTML='&#9733;'
   }else
   star.innerHTML='&#9734;'
    })
  })
})

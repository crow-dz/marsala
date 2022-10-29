
const icons = document.querySelectorAll('.section-1-icons i')
setInterval(()=>{
    const icon = document.querySelector('.section-1-icons .change');
    if(icon.nextElementSibling == null){
        icons[0].classList.add("change") ;
        
    }else{
       
       icon.nextElementSibling.classList.add('change');
    }
    icon.classList.remove('change'); 
   
},3000)



const accordion =document.querySelectorAll('.accordion');
const accContentAll = document.querySelectorAll('.acc_content');
let currentIndex;
//function(ind,element) {

//}
accordion.forEach((el,index) => {
    el.addEventListener('click',(event) =>{
        const accHeader = el.querySelector('.acc_header');
        const accContent = el.querySelector('.acc_content');
        const accArrow = el.querySelector('.acc_arrow');
        currentIndex= index;
       
        
         if(event.target.contains(accHeader) && !accContent.classList.contains('acc_content-active')) 
         {
            accContent.classList.add('acc_content-active');
            accArrow.textContent = '▲';
         } 
         else if(accContent.classList.contains('acc_content-active'))
         {
            accContent.classList.remove('acc_content-active');
            accArrow.textContent = '▼';
         };
         
    })
})

/*accContentAll.forEach((element,ind) => {
   console.log(ind);
   console.log(element.classList);
   console.log(currentIndex);
   if(element.classList.contains('acc_content-active') && ind != currentIndex){
      accContent.classList.remove('acc_content-active');
      accArrow.textContent = '▼';
   }
})*/
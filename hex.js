const secondcolorhexflipper = document.getElementById('firstbtntwo')
const display=document.querySelector('.code')  
//the codes below is for the second html page
const bodyTwo=document.querySelector('.firstdiv')   
 //we set the default color to coral and it changes onclick
const lettersandalpha=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']


secondcolorhexflipper.addEventListener('click',()=>{
  let colorText='#'
  for(let i=0;i<6;i++){
    let randomm=Math.floor(Math.random()*lettersandalpha.length)
    let myGuy=lettersandalpha[randomm]
    colorText+=myGuy
    bodyTwo.style.backgroundColor=colorText
    display.innerHTML=colorText
  }
})
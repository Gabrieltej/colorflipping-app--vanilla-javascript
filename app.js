const firstcolorflipper = document.getElementById('firstbtnone')

const firstpagediv=document.querySelector('.divfirst')
const secondpage=document.querySelector('.firstdiv') 
 //we set the default color to coral and it changes onclick
const displayOne=document.querySelector('.code')


const colorflippercolor=['red','blue','orange','violet','green','brown','purple','black','cyan','gold']

 firstcolorflipper.addEventListener('click',()=>{
  let randomOne=Math.floor(Math.random()*colorflippercolor.length)
  let randocolor = colorflippercolor[randomOne]

  if(randocolor==='black'){
   firstpagediv.style.color='white'
  }
 firstpagediv.style.backgroundColor=randocolor
 displayOne.innerHTML=randocolor
})



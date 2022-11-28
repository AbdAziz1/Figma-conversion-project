let nav = document.querySelector("nav")
let btn = document.querySelector("btn")
window.addEventListener("scroll",()=>{
   if (window.pageYOffset>60){ 
    nav.classList.add("scrolled")
    btn.classList.add("white")
    }
    else{
    nav.classList.remove("scrolled") 
    btn.classList.remove("white")  

    }
})
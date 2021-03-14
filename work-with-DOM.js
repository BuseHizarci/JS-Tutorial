//https://www.w3schools.com/jsref/dom_obj_event.asp

let greeting=document.querySelector("#greeting")
greeting.addEventListener("click", domClick)

function domClick(){
    
        console.log("Tikladim")
        console.log(this.style.color=="red" ? this.style.color="black ":this.style.color="red" )
    
} // Once bir dinleme islemi yapiyorum tum DOM elementleri icinde yapabilirim
 // == red ise ? black : degil ise red yap






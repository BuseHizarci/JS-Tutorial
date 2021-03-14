// FOnce tanimlamalar 
let counter=0
let counterDOM=document.querySelector('#counter')
let increaseDOM=document.querySelector('#increase')
let decreaseDOM=document.querySelector('#decrease')


counterDOM.innerHTML=counter // artik 100 degil 0 gosterir


increaseDOM.addEventListener("click",clickEvent)  // click oldugunda clickevent calissin
decreaseDOM.addEventListener("click",clickEvent) 

    function clickEvent(){
        console.log(this.id)
        this.id=="increase" ? counterDOM.innerHTML = counter +=1 :  counterDOM.innerHTML = counter -=1
        
    }  //this id icerisine ulastim eger inc ise +1 dec ise -1
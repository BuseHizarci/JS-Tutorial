// FOnce tanimlamalar 
//Number a cevirdim yanyana degil toplayarak yazsin
//locall storagedan aldigim bilgi varsa number olarak gorulsun artsin
let counter=localStorage.setItem('counter') ? Number(localStorage.getItem('counter'))
let counterDOM=document.querySelector('#counter')
let increaseDOM=document.querySelector('#increase')
let decreaseDOM=document.querySelector('#decrease')


counterDOM.innerHTML=counter // artik 100 degil 0 gosterir


increaseDOM.addEventListener("click",clickEvent)  // click oldugunda clickevent calissin
decreaseDOM.addEventListener("click",clickEvent) 

    function clickEvent(){
        this.id=="increase" ? counterDOM.innerHTML = counter +=1 :  counterDOM.innerHTML = counter -=1
        localStorage.setItem('counter',counter) //
        counterDOM.innerHTML=counter
    }  //this id icerisine ulastim eger inc ise +1 dec ise -1
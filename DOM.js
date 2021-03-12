// //Document yani HTML icindeki objeye erismek icin kullaniyoruz Search : Js change document style
// console.log(document.URL)
// document.body.style.backgroundColor="pink"

// // doc icerisinden eleman secimi ve Html ici degistirme

// let link = document.querySelector("ul#list>li>a")
// link.innerHTML += " degisti"
// link.style.color="red"
// link.classList.add ('btn')

//prompt ile bilgi aldim Adiniz: Buse 
//query selector ile id sectim #greeting
// style olarak da degistirebildim

let fullName = prompt("Adiniz")
let greeting= document.querySelector("#greeting")
greeting.innerHTML= `${greeting.innerHTML} <small style="color:red"> ${fullName} </small>`
//find last child 

//  let item=document.querySelector("ul#list>li:last-child")
// console.log(item)

//InnerHtml first child changed
// let item=document.querySelector("ul#list>li:first-child").innerHTML="Degistirdik"
// console.log(item)

// let ulDOM = document.querySelector("ul#list")
// let liDOM=document.createElement('li')

// liDOM.innerHTML="Kendi olusturdumuz oge"

// //Kendi olusturdugum ogeyi ekledim Append ile
// ulDOM.append(liDOM) //en sona ekledi

// ulDOM.prepend(liDOM) // ilk oge ekledi


//Dom a Css ile Class bilgisi ogrenmek veya cikartmak 
let greeting=document.querySelector("#greeting")

greeting.classList.add("text-primary")
greeting.classList.add("new-info","second","third")
greeting.classList.remove("title") 
console.log(greeting.classList)


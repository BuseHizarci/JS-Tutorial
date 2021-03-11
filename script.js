var serverName= "kodluyoruz"
console.log(serverName) 

fullName="Buse Hizarci";
console.log(fullName)

fullName="Buse"
fullName += " Hizarci"
console.log(fullName)

let isActive=true
let hasPassword=false

let firstName="Buse"
let lastName="Hizarci"
console.log(firstName,lastName)


let price = 100
let tax=0.18
let priceTax= price*tax
let total= price + priceTax

console.log("Fiyat", price, "KDV" , tax , "Tutar",priceTax , "Fiyat" , total)

let counter=12
counter++;
console.log(counter)
counter-=1; 

console.log(3 % 2)
console.log(2**4) // Ust alma 
console.log(Math.floor (1.7)) // Asagi yuvarlama 
console.log(Math.ceil (1.7) )// Yukari yuvarlama
console.log(Math.round (1.7) )// Yakina yuvarlama

let stringNumber="11"
console.log(stringNumber)
let newNumber=Number(stringNumber) // kullaniliyor
console.log(newNumber)


let userName;
let isUserName=Boolean(userName)
console.log(isUserName)

console.log(
    "stringNumber:",
    typeof(stringNumber)
)

let number2="11px"
number2=parseInt(number2)
console.log("number2:" , (number2), "tipi" ,typeof ( number2 ))

let number3="11.1px"
number3=parseFloat(number3)
console.log("number3:" , (number3), "tipi" , typeof ( number3 ))

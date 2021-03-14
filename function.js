// function hello() {
//     console.log("Merhaba")
//     helloWorld()  // function icine function yazma

// }
// function helloWorld(){
//     console.log("Hello World") 
    
// }

// function userCheck(){
//     if ( username)
// }
// hello() // calistirmak icin () kullan

let firstName="Buse" // bu bilgi gelmeden fonksiyon calismaz
let test123= 'fener'
// function greetings(firstName="",lastName="Hizarci"){ //firstname parametresi aldim iceriye , disariya bagimli olmamak icin
// //  console.log(`Merhaba ${firstName ? firstName:""}`) 
// console.log(`Merhaba ${firstName} ${lastName}`)
// }

// console.log(firstName) // Buse i alir cunku burasi bir degisken tanimliyor
// greetings('dsadada') //fonksyiona parametre gondermedim 
// greetings("Parametre gonderdim") 

// function sayfa(title,icerik){
//     console.log(`Title ${title}`)
// }

// sayfa('baslik','buda icerik')
// sayfa('baslik 2','buda icerik')



// Arrow function

function hello(firstName){
    console.log(`Hello ${firstName}`)

}
hello("Javascript")

const helloFunc_v1 = (firstName) => { console.log(`Hellooo ${firstName}`)}
// const ile sanki degisken gibi belirttim = ile icine yazilacak parametreyi yazdim
helloFunc_v1("helloFunc_v1")
//Tek ise suslu par gerek yok
const helloFuncV2 = firstName => console.log(`Welcome ${firstName}`)
helloFuncV2("helloFuncv2")
// Birden fazla degisken varsa suslu parantez
const helloFuncV3 = (firstName , lastName) =>  
console.log(`Welcome ${firstName} ${lastName}`)
helloFuncV3("helloFuncv3" , "lastName info") 




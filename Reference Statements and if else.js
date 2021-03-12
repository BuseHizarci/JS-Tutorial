// Eger kullanici bilgisi varsa ekrana yazdir 

// eger (username.length > 0 {console.log(username)})
//degilse concole.log("bilgi yok")
// if (username.length > 0 {console.log(username)})

// let username=prompt("kullanici adi giriniz")

// if (username.length>0 ){ // if her zaman true olarak calisir 
//     console.log(`Kullanici Bilginiz ${username}`)
    
// }
// else {
//     console.log('bilgi yok')
// }

// Coklu Kosullarla Calismak 
let username=prompt("Kullanici adi giriniz")
let age=prompt("Yasiniz nedir")
let info=document.querySelector("#info") // Htmldeki infoyu alip onun yerine cikan sonuclari yazdirdim

if (username && age >= 18){
    info.innerHTML="Ehliyet alabilir"
}
else if (!username) { // username yok
    info.innerHTML="Kullanici adi yoktur"
}
else if(!(age >= 18)){ // yas yok veya 18 degil
    info.innerHTML="Yas bilginiz yok veya 18 yasindan kucuksunuz"
}
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
// let username=prompt("Kullanici adi giriniz")
// let age=prompt("Yasiniz nedir")
// let info=document.querySelector("#info") // Htmldeki infoyu alip onun yerine cikan sonuclari yazdirdim

// if (username && age >= 18){
//     info.innerHTML="Ehliyet alabilir"
// }
// else if (!username) { // username yok
//     info.innerHTML="Kullanici adi yoktur"
// }
// else if(!(age >= 18)){ // yas yok veya 18 degil
//     info.innerHTML="Yas bilginiz yok veya 18 yasindan kucuksunuz"
// }
//let username=prompt("Kullanici bilgilerinizi giriniz")
//let info= document.querySelector("#info")

//ternary kullanimi 
//kosul ? dogruysa " yanlissa "
//info.innerHTML= `${username.length > 0 ? username:"Kullanici bilgisi yok"}`


let examGrade=prompt("Puan Gir")
let textInfo;
if (examGrade >= 0  && examGrade<= 100){
   
     info.classList.add('text-primary')

    if (examGrade >= 90) {
        textInfo="AA"
    
    } 
    else if(examGrade >= 85){
        textInfo="BA"
    }
    
    else if(examGrade >= 60){
        textInfo="CC"
    }
    else if(examGrade >= 59){
        textInfo="DD"
    }
    else if(examGrade <= 20){

        textInfo="FF"
    }
    else{
        textInfo = "Bilgiler Yanlis"
        info.classList.remove('text-primary')
        info.classList.add('text-danger')
    }

}
let info= document.querySelector("#info")
info.innerHTML= `${textInfo} -> ${examGrade}` 



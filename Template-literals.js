let username="Buse"
const DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN

//console.log( "Merhaba " , username , "hosgeldiniz" ,"mail adresiniz:" ,email)

let info = `
Merhaba ${username} sitemize hosgeldiniz

Mail adresiniz ${email}

mail adres uzunlugu ${email.length}
borcunuz: ${(2+3)} TL 
saat bilgisi ${new Date().getHours()}

kisa isminiz ${username[0]}
`

console.log(info)
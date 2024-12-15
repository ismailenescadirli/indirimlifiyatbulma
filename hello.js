let fiyatListesi=[300,540,670,850,100,600,1650]
let indirimOrani=Number(prompt("İndirim oranı giriniz"));
let indirimliFiyatListesi=[]
for (let i = 0; i < fiyatListesi.length; i++) {
    let indirimliFiyat = fiyatListesi[i]-(fiyatListesi[i] * indirimOrani /100);
    indirimliFiyatListesi[i]=indirimliFiyat
}
console.log("İndirimli Fiyatlar:",indirimliFiyatListesi);


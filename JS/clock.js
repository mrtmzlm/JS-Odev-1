let isim = prompt("İsiminizi yazınız.");
let myName = document.querySelector("#myName");
myName.innerHTML = `${isim}`

let dt = new Date();
let day = dt.getDay();

switch(day){
    case 1 :
        day = "Pazartesi";
        break;
    case 2 :
        day = "Salı";
        break;
    case 3 :
        day = "Çarşamba"
        break;
    case 4 :
        day = "Perşembe"
        break;
    case 5 :
        day = "Cuma"
        break;
    case 6 :
        day = "Cumartesi"
        break;
    case 7 :
        day = "Pazar"
        break;
}

let myClock = document.querySelector("#myClock")
myClock.innerHTML = `${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()} ${day}`
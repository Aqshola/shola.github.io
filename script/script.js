let cases= document.querySelector(".case .main-txt");
let death=document.querySelector(".death .main-txt");
let recoverd=document.querySelector(".recover .main-txt")
let Gcases=document.querySelector(".global-case .main-txt");
let Gdeath=document.querySelector(".global-death .main-txt");
let Grecover=document.querySelector(".global-recover .main-txt");
let updateDate=document.querySelector(".update-date span")


fetch("https://covid19.mathdro.id/api/countries/indonesia").then(m => m.json()).then(m => {
    cases.innerHTML = (m.confirmed.value).toLocaleString("en");
    death.innerHTML = (m.deaths.value).toLocaleString("en");
    recoverd.innerHTML = (m.recovered.value).toLocaleString("en");
    let date=new Date(m.lastUpdate);
    updateDate.innerHTML=date.toLocaleString();
});

fetch("https://covid19.mathdro.id/api").then(m=>m.json()).then(m=>{
    Gcases.innerHTML=(m.confirmed.value).toLocaleString("en");
    Gdeath.innerHTML = (m.deaths.value).toLocaleString("en");
    Grecover.innerHTML = (m.recovered.value).toLocaleString("en");
});
    

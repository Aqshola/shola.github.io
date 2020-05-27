let cases= document.querySelector(".case .main-txt");
let death=document.querySelector(".death .main-txt");
let recoverd=document.querySelector(".recover .main-txt")
let Gcases=document.querySelector(".global-case .main-txt");
let Gdeath=document.querySelector(".global-death .main-txt");
let Grecover=document.querySelector(".global-recover .main-txt");
let updateDate=document.querySelector(".update-date span")

fetch("https://api.covid19api.com/summary").then(m => m.json()).then(m => {
    let x= m.Countries;
    let y= m.Global;

    Gcases.innerHTML = (y.TotalConfirmed).toLocaleString('en');
    Gdeath.innerHTML = (y.TotalDeaths).toLocaleString('en');
    Grecover.innerHTML = (y.TotalRecovered).toLocaleString('en');

    x.forEach(c =>{
        if(c.Country=="Indonesia"){
            console.log(c);
            let time=new Date(c.Date);
            updateDate.innerHTML=time.toLocaleString();
            cases.innerHTML=(c.TotalConfirmed).toLocaleString('en');
            death.innerHTML = (c.TotalDeaths).toLocaleString('en');
            recoverd.innerHTML = (c.TotalRecovered).toLocaleString('en');
        }
    }
    )
} );
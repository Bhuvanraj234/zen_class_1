var countryName=document.getElementById("countryName")
var temp=document.getElementById("temp")
var feelsLike=document.getElementById("feelsLike")
var windSpeed= document.getElementById("windSpeed")
var humidity=document.getElementById("humidity")
var rest=document.getElementById("rest")
var apiKey= "0d4b89acb92633b90ee6801c6ab269ab"
var  rep=document.getElementById("rep")
var b=[]

async function getdata(){
   try{ 
    var data=await fetch("https://restcountries.com/v2/all")
    var get= await data.json()
    console.log(get)
    for(var i=0;i<3;i++){
    var weatherData= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${get[i].name}&appid=${apiKey}`)
    var getw=await weatherData.json()
    b.push(getw) 
    rest.innerHTML+=`<div class=" card item mt-3 mb-3">
         <div class=" card-header bg-dark text-light">${get[i].name}</div>
        <img src=${get[i].flags.png} class="image-fluid w-100 h-75" alt="...">
        <div class="card-body" id="grad">
            <h5 class="card-title">Capital : ${get[i].capital}</h5>
            <h5>Region : ${get[i].region}</h5>
            <h5>Country code : ${get[i].alpha3Code}</h5>
            <button id="btn${i}">Click for Weather</button>
        </div>`
    }
    var btn1=document.getElementById("btn0")
    var btn2=document.getElementById("btn1")
    var btn3=document.getElementById("btn2")
        btn1.addEventListener("click",()=>{
            countryName.innerHTML=`Name : ${b[0].name}`
            temp.innerHTML=`Temprature : ${b[0].main.temp}`
            windSpeed.innerHTML=`Wind speed : ${b[0].wind.speed}`
            humidity.innerHTML=`Humidity : ${b[0].main.humidity}`

        })
btn2.addEventListener("click",()=>{
    countryName.innerHTML=`Name : ${b[1].name}`
    temp.innerHTML=`Temprature : ${b[1].main.temp}`
    windSpeed.innerHTML=`Wind speed : ${b[1].wind.speed}`
    humidity.innerHTML=`Humidity : ${b[1].main.humidity}`
})
btn3.addEventListener("click",()=>{
    countryName.innerHTML=`Name : ${b[2].name}`
    temp.innerHTML=`Temprature : ${b[2].main.temp}`
    windSpeed.innerHTML=`Wind speed : ${b[2].wind.speed}`
    humidity.innerHTML=`Humidity : ${b[2].main.humidity}`
})
console.log(b)
} catch(err){
console.log(err)
}

}
getdata()

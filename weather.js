var search = document.getElementById("search");
//events
search.addEventListener("keyup", (e) => {
    e.preventDefault();
    if(e.keyCode === 13){
    var getCityName = e.target.value
}
    getWeather(getCityName);
});
 function getWeather(getCityName){
     //console.log(getCityName);
     const weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${getCityName}&&mode=json&units=metric&APPID=93fde06d08e5b4dc87f909c8260514b9`;
     window
    .fetch(weatherApi)
    .then( data => {
        data
        .json()
        .then( weather => {
             var WeatherData = weather.weather;            
              var output = "";
       for(let x of WeatherData) { //array here
             output +=`
            <div class = "col-md-4 offset-4 mt-4 card">            
            <div class="card-body">
            <h1>${weather.name}</h1>
            <span class="icon"><img src="http://openweathermap.org/img/wn/${x.icon}.png"/></span>
            <p><span>temp:</span>
            <span class="temp">${weather.main.temp}&deg;c</span></p>
            <span class="des float-left">${x.description}</span></p>
            <span class="des float-right">${x.main}</span></p>
            
            </div>
        </div>
            
            `;            
            document.getElementById('template').innerHTML = output;
           }
         })
       .catch(err => console.log(err));
         })
    .catch(err => console.log(err));
 }
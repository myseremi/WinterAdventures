//The function fetches relevant data from the api
let weather = {
    "apiKey": "4b37cf6fb0fd99c2d020f23cf780e6c2",
    fetchWeather: function () {
        fetch('https://api.openweathermap.org/data/2.5/weather?id=2975517&units=metric&appid=4b37cf6fb0fd99c2d020f23cf780e6c2')
            .then((response) => response.json())
            .then((data) => this.displayWeather(data)
            );
    },

    //function to display data on page
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp } = data.main;
        console.log(name, icon, description, temp);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png" ;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°";
    } 
};

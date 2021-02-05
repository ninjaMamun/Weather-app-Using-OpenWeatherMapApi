defaultCity();
document.getElementById("submitBtn").addEventListener('click', function () {
    const cityInput = document.getElementById("cityInput").value;

    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + cityInput + '&units=metric&appid=24862cb6763f1a43e752222c0aaa8220')
        .then(res => res.json())
        .then(data => {
            document.getElementById("city").innerText = data['name'];
            document.getElementById("currentTemp").innerText = data['main']['temp'];
            document.getElementById("skyStatus").innerText = data['weather'][0]['description'];
            document.getElementById("weatherImg").src = "https://openweathermap.org/img/wn/02d@2x.png";
            let weatherImg = data['weather'][0]['icon'];
            document.getElementById("weatherImg").src = 'https://openweathermap.org/img/wn/' +weatherImg+ '@2x.png';
            console.log(data);
        })
})

function defaultCity(){
    const defaultCityDhaka = 'Dhaka';
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + defaultCityDhaka + '&units=metric&appid=24862cb6763f1a43e752222c0aaa8220')
        .then(res => res.json())
        .then(data => {
            document.getElementById("city").innerText = data['name'];
            document.getElementById("currentTemp").innerText = data['main']['temp'];
            document.getElementById("skyStatus").innerText = data['weather'][0]['description'];
            let weatherImg = data['weather'][0]['icon'];
            document.getElementById("weatherImg").src = 'https://openweathermap.org/img/wn/' +weatherImg+ '@2x.png';
            console.log(data);
        })       
}

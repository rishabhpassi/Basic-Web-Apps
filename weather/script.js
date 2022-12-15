
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '647bf9399cmshdafe3276f788354p1b8af0jsn5771fe674b27',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
        .then(response => response.json())
        .then((response) => {

            Temp.innerHTML = response.temp
            Feels_like.innerHTML = response.feels_like
            Min_temp.innerHTML = response.min_temp
            Max_temp.innerHTML = response.max_temp
            Wind_speed.innerHTML = response.wind_speed

        })
        .catch(err => console.error(err));
}

const sub = document.getElementById('submit');

if (sub) {
    sub.addEventListener('click', (e) => {

        e.preventDefault();
        getWeather(document.getElementById('city').value);
        console.log("hello");

    })
}








const navbar = document.getElementById("navbar");
const apiKey = "7b613f8b274d4f108f392431250702";
const city = "Akure";
const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const date = new Date();
let month1 = month[date.getMonth()]
console.log(month1)

fetch(url)
    .then(response => response.json())
    .then(data => {
        const date = data.current.last_updated;
        console.log(get.month())
        let febr = date.slice(8,11);
        document.getElementById("date").innerHTML = "Monday, " + febr + month1;

        let temp = data.current.temp_c;
        document.getElementById("temperature").innerHTML = Math.floor(temp) + "°C"; 
    })
    .catch(error => error)

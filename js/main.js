//The user will enter a city, state, country. 
// Use city, staatae country to get the weather
// api key for nasa:   d23e009d9e3c420522a7d9b1300082d7
/*

create const for button doc.qs
activate button with .addevli(click, func)

grab text value, convert to city, state, country

create function called getWeather
* Create the following inside of the function
** create the const url with backtick, set interpolation for date
** create the fetch call
***write data.title inside of the h2 and img-alt
***set img-src to data.url
***set h3 to data.explanation
*** grab date value, convert to yyyy-mm-dd
*/


const getLocation = document.querySelector('button')
getLocation.addEventListener('click', getWeather)

function getWeather() {

    //get units
    const unit = document.querySelector('input[name = unit]:checked').value

    //creaate const userdata, api
    const city = document.querySelector('input').value
    const api = `d23e009d9e3c420522a7d9b1300082d7`
    const country = document.querySelector('#country').value

    //insert date into url
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api}&units=${unit}`
    fetch(url)
        .then(res => res.json()) //parse response into aa json
        .then(data => {
            //logs json, title, url, explanations is description
            console.log(data)
            console.log(data.name)
            console.log(data.main)
            console.log(data.weather[0].description)

            //display city name to dom          
            document.querySelector('#city').innerText = `Location: ${data.name} `

            //display temp and unit
            if (unit === 'imperial') {
                document.querySelector('#currentTemp').innerText = `Current Temperature: ${Math.round(data.main.temp)} ° F`
            } else {
                document.querySelector('#currentTemp').innerText = `Current Temperature: ${Math.round(data.main.temp)} ° C`
            }

            //display weather
            document.querySelector('#weather').innerText = `Current Weather: ${data.weather[0].description.toUpperCase()}`
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}
require('dotenv').config()

const getAQI = async (lat, lon) => {
    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`

    const response = await fetch(url);
    const data = await response.json()

    console.log(data)

    const aqi = await {
        aqi: 150, // for test //await data['list'][0].main.aqi needs to be calculated based on components,
        components: await data['list'][0].components,
    }

    console.log(aqi)
    return aqi

}



module.exports = getAQI


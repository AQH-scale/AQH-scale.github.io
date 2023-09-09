const API_KEY = '72eb93baf6baa9eca9a4fc3f728855ba'

const getAQI = async (lat, lon) => {
    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`

    const response = await fetch(url);
    const data = await response.json()

    const aqi = await {
        aqi: await data['list'][0].main.aqi,
        components: await data['list'][0].components,
    }

    console.log(aqi)
    return aqi

}

console.log(getAQI(47.6061,122.3328))
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

    const pollutant = "PM10"; 
    const concentration = 122; 
    let number = calculateAQI(pollutant, concentration);
    console.log(number)

    console.log(aqi)
    return aqi

}

const getTempPressure = async (lat, lon) => {
    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`

}


function calculateAQI(pollutant, concentration) {

    const breakpoints = {
        CO: [0, 4.5, 9.5, 12.5, 15.5, 30.5, 40.5],
        //NO: [0, 53, 100, 360, 649, 1249, 2049],
        NO2: [0, 0.054, 0.101, 0.361, 0.65, 1.25, 1.65],
        O3: [0, 0, 0.125, 0.165, 0.205, 0.405, 0.505],
        SO2: [0, 35, 75, 185, 304, 604, 805],
        PM2_5: [0, 12, 35.5, 55.5, 150.5, 250.5, 350.5],
        PM10: [0, 55, 155, 255, 355, 425, 505]
      //  NH3: [0, 200, 400, 800, 1200, 1800, 2400]
    }

    const aqiBreakpoints = [0, 50, 100, 150, 200, 300, 400];


    let i;
    for (i = 0; i < breakpoints[pollutant].length - 1; i++) {
        if (concentration >= breakpoints[pollutant][i] && concentration <= breakpoints[pollutant][i + 1]) {
            break;
        }
    }

    const aqiLow = aqiBreakpoints[i];
    const aqiHigh = aqiBreakpoints[i + 1];
    const bpLow = breakpoints[pollutant][i];
    const bpHigh = breakpoints[pollutant][i + 1];

    return Math.round(((aqiHigh - aqiLow) / (bpHigh - bpLow)) * (concentration - bpLow) + aqiLow);
}





module.exports = getAQI


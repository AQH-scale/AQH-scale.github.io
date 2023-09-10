require('dotenv').config()

const getAQI = async (lat, lon) => {
    console.log('here')
    const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`
    
    console.log("done")
    const response = await fetch(url);
    const data = await response.json()

    console.log(data)

    const aqi = await {
        aqi: null, // for test //await data['list'][0].main.aqi needs to be calculated based on components,
        components: await data['list'][0].components,
    }

    const realAqi = await getRealAqi(lat, lon, await data['list'][0].components)

    aqi.aqi= realAqi


    console.log(aqi)
    return aqi

}

const getRealAqi = async (lat, lon, ugm3_dictionary) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WEATHER_API_KEY}`
    const respone = await fetch(url)
    const data = await respone.json()
    console.log('here')
    const temp = (data.main.temp)
    let pressure = (data.main.pressure)

    pressure = pressure/ 0.000986


    const ppbs = [calculateAQI(pressure, temp, "SO2", ugm3_dictionary["so2"]), calculateAQI(pressure, temp, "CO", ugm3_dictionary["co"]), calculateAQI(pressure, temp, "NO2", ugm3_dictionary["no2"]), calculateAQI(pressure, temp, "PM2_5", ugm3_dictionary["pm2_5"]), calculateAQI(pressure, temp, "PM10", ugm3_dictionary["pm10"])]
    
    var greatest_aqi = ppbs[0];
    
    for (let i = 0; i < 5; i++){
        if (ppbs[i] > greatest_aqi){
            greatest_aqi = ppbs[i];
        }
    }

    console.log(greatest_aqi);
    return greatest_aqi;

}


function ugm3ToPpb(pressure, temperature, ugm3, pollutant){
    
    const weights = {
        CO: [28.01],
        NO2: [46.01],
        O3: [48.00],
        SO2: [64.07]
    }
    
    var V = 8.314 * temperature/pressure;
    
    return V * ugm3/weights[pollutant]/100;
}

//let ppb = ugm3ToPpb(1.0, 291, 0.23, "SO2");
//console.log(ppb);


function calculateAQI(pres, temp, pollutant, theConcentration) {
    
    var concentration; 
    
    if (pollutant == "NO2" || pollutant == "SO2" || pollutant == "O3"){
         concentration = ugm3ToPpb(pres, temp, theConcentration, pollutant);
    }
    else if (pollutant == "CO"){
         concentration = ugm3ToPpb(pres, temp, theConcentration, "CO");
         concentration = concentration/1000.0;
    }
    else{
        concentration = theConcentration;
    }
    console.log(concentration);
    
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


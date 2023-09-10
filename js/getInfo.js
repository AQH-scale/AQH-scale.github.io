const chat = require('./openai-controller.js')
const aqi = require('./weather-controller.js')

const aqi_info = async (position) => {
    const aqi_data = await aqi(position.lon, position.lat);

    let componentsString = ""

    console.log(aqi_data.components)

    for (const [key, value] of Object.entries(aqi_data.components)) {
        componentsString += `${key}: ${value} micrograms per cubic meter ,`
    }

    console.log(componentsString)
    
    const gpt_response = await chat(`Tell me about the adverse health conditions related to an air quality of ${aqi_data.aqi} with individual particle measurments of ${componentsString} in the air, please be as breif as possible`)

    await console.log(gpt_response)

    return {
        gtp_info: gpt_response,
        data: aqi_data,
    }
}


module.exports = aqi_info

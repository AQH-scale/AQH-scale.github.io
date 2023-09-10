const chat = require('./openai-controller.js')
const aqi = require('./weather-controller.js')

const aqi_info = async (position, query) => {
    const aqi_data = await aqi(position.lon, position.lat);

    let componentsString = ""

    console.log(aqi_data.components)

    for (const [key, value] of Object.entries(aqi_data.components)) {
        componentsString += `${key}: ${value} micrograms per cubic meter ,`
    }

    console.log(componentsString)
    
    const gpt_response = await chat(`Tell me about the adverse health conditions related to an air quality of ${aqi_data.aqi} and then in 100 words summarize the effects of the individual particle measurments of ${componentsString} in the air, please be as breif as possible with bullets of 15 words per`)

    await console.log(gpt_response[0].message.content)

    return await {
        gtp_info: gpt_response[0].message.content,
        data: aqi_data,
    }
}


module.exports = aqi_info;
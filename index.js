const express = require("express")

const weather = require('./js/weather-controller')
const chatCompletion =  require("./js/openai-controller")


console.log(chatCompletion('breifly summarize the negative health effects of an air quality index of 250 3 bullet points of no more than 20 words each'))
console.log(weather(47.6061,122.3328))
const express = require("express")

const chatCompletion =  require("./js/openai-controller")

console.log(chatCompletion('breifly summarize the negative health effects of an air quality index of 250 3 bullet points of no more than 20 words each'))
const OpenAI = require("openai");
require('dotenv').config()

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const chat = async (prompt) => {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
        temperature:1,
    });

    await console.log(chatCompletion.choices)
    return await chatCompletion.choices;
}





module.exports = chat;


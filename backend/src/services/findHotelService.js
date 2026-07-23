const { generateText } = require("../config/ai.config");
const { findHotelsPrompt}=require("../prompts/prompts")

async function findHotels(data){
    const prompt = findHotelsPrompt(data);
    console.log(prompt)
    const itinerary = await generateText(prompt);
    let text = itinerary;
text = text.replace(/```json|```/g, "").trim();
const hotelData = JSON.parse(text);
    return {hotelData};
}

module.exports={findHotels}
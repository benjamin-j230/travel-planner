const { generateText } = require("../config/ai.config");
const { findFuelsPrompt}=require("../prompts/prompts")

async function findFuel(data){
    const prompt = findFuelsPrompt(data);
    console.log(prompt)
    const itinerary = await generateText(prompt);
    let text = itinerary;
text = text.replace(/```json|```/g, "").trim();
const fuelData = JSON.parse(text);

    return{fuelData}
}
module.exports={findFuel}
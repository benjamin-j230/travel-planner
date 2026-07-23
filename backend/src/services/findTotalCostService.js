const { generateText } = require("../config/ai.config");
const { findTotalCostPrompt}=require("../prompts/prompts")

async function findTotalCost(data){
    const prompt = findTotalCostPrompt(data);
    console.log(prompt)
    const itinerary = await generateText(prompt);
    let text = itinerary;
text = text.replace(/```json|```/g, "").trim();
    return {text}
}

module.exports={findTotalCost}
const { generateText } = require("../config/ai.config");
const { tripPlannerPrompt } = require("../prompts/prompts");

async function planTrip(data) {
  if (!data || typeof data !== "object") {
    throw new Error("Trip planner data is required.");
  }

  const prompt = tripPlannerPrompt(data);
  const itinerary = await generateText(prompt);

  return { itinerary };
}

module.exports = { planTrip };
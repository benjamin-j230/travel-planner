const { generateText } = require("../config/ai.config");
const { destinationPlacesPrompt } = require("../prompts/prompts");

async function planTrip(data) {
  if (!data || typeof data !== "object") {
    throw new Error("Trip planner data is required.");
  }

  const prompt = destinationPlacesPrompt(data);
  if (!prompt) {
    throw new Error("Failed to build a trip planning prompt.");
  }

  const itinerary = await generateText(prompt);
  let text = itinerary;
text = text.replace(/```json|```/g, "").trim();

const places = JSON.parse(text);
const destination=places.destination
  return { destination };
}

module.exports = { planTrip };
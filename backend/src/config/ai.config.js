const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is missing in .env file.");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-flash-latest", // or a supported model
});

async function generateText(prompt) {
  try {
    if (!prompt) {
      throw new Error("AI prompt is required.");
    }

    console.log("Prompt:", prompt);

    const result = await model.generateContent(prompt);

    const response = result.response;

    return response.text();

  } catch (err) {
    console.error("AI generation error:", err);
    throw new Error(err.message || "AI service failed.");
  }
}

module.exports = { generateText };
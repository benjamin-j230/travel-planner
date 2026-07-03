const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is missing in .env file.");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-flash-latest",
});

async function generateText(prompt) {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (err) {
    console.error("AI generation error:", err);
    throw new Error(err?.message || "AI service failed to generate a response.");
  }
}

module.exports = { generateText };
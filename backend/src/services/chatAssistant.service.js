const { generateText } = require("../config/ai.config");
const { chatAssistantPrompt } = require("../prompts/prompts");

async function chat(message, history = []) {
  if (!message || typeof message !== "string") {
    throw new Error("Message is required.");
  }

  const safeHistory = Array.isArray(history) ? history : [];

  const prompt = chatAssistantPrompt(message, safeHistory);
  const reply = await generateText(prompt);

  return { reply };
}

module.exports = { chat };
const { generateText } = require("../config/ai.config");
const { reviewSummarizerPrompt } = require("../prompts/prompts");

async function summarizeReviews(reviews) {
  if (!reviews || (Array.isArray(reviews) && reviews.length === 0)) {
    throw new Error("Reviews are required.");
  }

  const text = Array.isArray(reviews) ? reviews.join("\n") : reviews;

  if (typeof text !== "string" || !text.trim()) {
    throw new Error("Reviews must be a non-empty string or array.");
  }

  const prompt = reviewSummarizerPrompt(text);
  const summary = await generateText(prompt);

  return { summary };
}

module.exports = { summarizeReviews };
const { generateText } = require("../config/ai.config");
const { budgetPlannerPrompt } = require("../prompts/prompts");

async function planBudget(data) {
  if (!data || typeof data !== "object") {
    throw new Error("Budget planner data is required.");
  }

  const prompt = budgetPlannerPrompt(data);
  const breakdown = await generateText(prompt);

  return { breakdown };
}

module.exports = { planBudget };
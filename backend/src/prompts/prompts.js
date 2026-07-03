// All prompt templates live here so they're easy to tweak.

const tripPlannerPrompt = ({ destination, days, budget, interests }) => `
You are an expert travel planner.
Create a detailed ${days}-day trip itinerary for ${destination}.
Budget: ${budget}. Traveler interests: ${interests}.

Return the plan in clear sections for each day (Morning, Afternoon, Evening)
with suggested places, approximate costs, and a short tip per day.
Keep it practical and friendly.
`;

const reviewSummarizerPrompt = (reviews) => `
Summarize the following customer reviews into:
1. Overall sentiment (Positive / Mixed / Negative)
2. Top 3 things people liked
3. Top 3 complaints
4. A one-line verdict

Reviews:
${reviews}
`;

const budgetPlannerPrompt = ({ destination, days, travelers, totalBudget }) => `
You are a travel budget expert.
Plan a budget breakdown for a ${days}-day trip to ${destination}
for ${travelers} traveler(s) with a total budget of ${totalBudget}.

Break it into categories: Accommodation, Food, Transport, Activities, Misc.
Give amounts, percentages, and 3 money-saving tips.
`;

const chatAssistantPrompt = (message, history = "") => `
You are a helpful travel assistant for a trip-planning app.
Answer clearly and concisely. Only discuss travel-related topics.

${history ? "Conversation so far:\n" + history + "\n" : ""}
User: ${message}
Assistant:
`;

module.exports = {
  tripPlannerPrompt,
  reviewSummarizerPrompt,
  budgetPlannerPrompt,
  chatAssistantPrompt,
};
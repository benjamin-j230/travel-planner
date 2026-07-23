// All prompt templates live here so they're easy to tweak.

const tripPlannerPrompt = ({ destination, days, budget, interests }) => `
You are an expert travel planner.
Create a detailed ${days}-day trip itinerary for ${destination}.
Budget: ${budget}. Traveler interests: ${interests}.

Return the plan in clear sections for each day (Morning, Afternoon, Evening)
with suggested places, approximate costs, and a short tip per day.
Keep it practical and friendly.
`;
const destinationPlacesPrompt = ({ data }) => `
You are an expert travel planner.
Create a list of top must-visit places near ${data} with a short description for each place. Return the list in an object format with the following structure:
 destination:[{name:"place",description:"short description",image:"image_url",long_desc:"long description with cultural historical context or things like that",expected_cost:"approximate cost for that place"}]. Return only the in JSON fomat without any extra text or explanation.
`;

const findFuelsPrompt=({data})=>`
You have to find all the fuel stations near ${data} and charging stations near ${data} and return the list in an object format with the following structure:fuel_stations:[{name:"name of company of that pump",location:"location of that pump"}], electric_charging_stations:[{name:"name of charging station",location:"location of that charging station}]. Return only in JSON format without any extra text or explanation`;

const findHotelsPrompt=({data})=>`
You have to find all the hotels near ${data} and return the list in an object format with the following structure:hotels:[{name:"name of hotel",image:"image url of hotel",location:"location of that hotel",price:"price of that hotel"}]. Return only in JSON format without any extra text or explanation`;

const findTotalCostPrompt=({data})=>`
You have to find the total cost of the trip to top locations of ${data} and return the list in string format that says what might be the fuel cost, stays,food etc.Return these details in a string format without any extra text or explanation. Find lowest and highest cost in every one of this`;


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
  destinationPlacesPrompt,
  reviewSummarizerPrompt,
  budgetPlannerPrompt,
  chatAssistantPrompt,
  findFuelsPrompt,
  findHotelsPrompt,
  findTotalCostPrompt,
};
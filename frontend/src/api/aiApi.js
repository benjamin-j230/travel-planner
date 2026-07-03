import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/ai" });

export const getTripPlan  = (data)    => API.post("/trip-planner", data);
export const getReviewSummary = (reviews) => API.post("/summarize-reviews", { reviews });
export const getBudgetPlan = (data)   => API.post("/budget-planner", data);
export const sendChatMessage = (message) => API.post("/chat", { message });
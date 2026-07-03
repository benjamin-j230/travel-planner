const tripPlannerService = require("../services/tripPlanner.service");
const reviewService = require("../services/reviewSummarizer.service");
const budgetService = require("../services/budgetPlanner.service");
const chatService = require("../services/chatAssistant.service");

// POST /api/ai/trip-planner
exports.tripPlanner = async (req, res) => {
  try {
    const body = req.body || {};

    const result = await tripPlannerService.planTrip(body);

    res.json({
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.message || "Internal server error",
    });
  }
};

// POST /api/ai/summarize-reviews
exports.summarizeReviews = async (req, res) => {
  try {
    const { reviews } = req.body || {};

    if (!reviews) {
      return res.status(400).json({
        success: false,
        message: "reviews is required",
      });
    }

    const result = await reviewService.summarizeReviews(reviews);

    res.json({
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.message || "Internal server error",
    });
  }
};

// POST /api/ai/budget-planner
exports.budgetPlanner = async (req, res) => {
  try {
    const body = req.body || {};

    const result = await budgetService.planBudget(body);

    res.json({
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.message || "Internal server error",
    });
  }
};

// POST /api/ai/chat
exports.chat = async (req, res) => {
  try {
    const { message, history = [] } = req.body || {};

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "message is required",
      });
    }

    const result = await chatService.chat(message, history);

    res.json({
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err?.message || "Internal server error",
    });
  }
};
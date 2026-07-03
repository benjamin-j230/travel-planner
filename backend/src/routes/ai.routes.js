const express = require("express");
const aiController = require("../controllers/ai.controller");

const router = express.Router();

router.post("/trip-planner", aiController.tripPlanner);
router.post("/summarize-reviews", aiController.summarizeReviews);
router.post("/budget-planner", aiController.budgetPlanner);
router.post("/chat", aiController.chat);

module.exports = router;
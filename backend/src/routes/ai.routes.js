const express = require("express");
const aiController = require("../controllers/ai.controller");

const router = express.Router();

router.post("/trip-planner", aiController.tripPlanner);
router.post("/summarize-reviews", aiController.summarizeReviews);
router.post("/budget-planner", aiController.budgetPlanner);
router.post("/chat", aiController.chat);
router.post("/fuel-station",aiController.getFuelStations)
router.post("/find-hotels",aiController.findHotels)
router.post("/find-total-cost",aiController.findTotalCost)

module.exports = router;
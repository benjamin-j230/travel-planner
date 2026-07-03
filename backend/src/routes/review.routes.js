const express = require("express");
const router = express.Router();
const { createReview, getReviewsByPlace } = require("../controllers/review.controller");

router.post("/", createReview);
router.get("/:placeId", getReviewsByPlace);

module.exports = router;
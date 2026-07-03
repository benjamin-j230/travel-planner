const Review = require("../models/Review");

const createReview = async (req, res) => {
  try {
    const { placeId, placeName, placeType, rating, comment, authorName } = req.body;

    if (!placeId || !placeName || !placeType || !rating || !comment) {
      return res.status(400).json({
        success: false,
        message: "placeId, placeName, placeType, rating, and comment are required",
      });
    }

    const review = await Review.create({
      placeId,
      placeName,
      placeType,
      rating,
      comment,
      authorName: authorName || "Anonymous",
      user: req.user?.id || null,
    });

    return res.status(201).json({ success: true, data: review });
  } catch (error) {
    console.error("Create Review Error:", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getReviewsByPlace = async (req, res) => {
  try {
    const { placeId } = req.params;
    const reviews = await Review.find({ placeId }).sort({ createdAt: -1 });

    const avgRating = reviews.length
      ? Number((reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1))
      : null;

    return res.status(200).json({
      success: true,
      count: reviews.length,
      averageRating: avgRating,
      data: reviews,
    });
  } catch (error) {
    console.error("Get Reviews Error:", error.message);
    return res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { createReview, getReviewsByPlace };
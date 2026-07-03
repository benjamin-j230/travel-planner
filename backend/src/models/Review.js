const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    placeId: { type: String, required: true, index: true },
    placeName: { type: String, required: true },
    placeType: {
      type: String,
      enum: ["restaurant", "fuel_station", "attraction", "hotel"],
      required: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
    authorName: { type: String, default: "Anonymous" },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String, required: true, trim: true, maxlength: 1000 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
const validateCoords = (req, res, next) => {
  const { lat, lng } = req.query;
  if (!lat || !lng || Number.isNaN(Number(lat)) || Number.isNaN(Number(lng))) {
    return res.status(400).json({
      success: false,
      message: "Valid lat and lng query params are required",
    });
  }
  next();
};

const validateDirectionsQuery = (req, res, next) => {
  const { origin, destination } = req.query;
  if (!origin || !destination) {
    return res.status(400).json({
      success: false,
      message: "origin and destination query params are required",
    });
  }
  next();
};

module.exports = { validateCoords, validateDirectionsQuery };
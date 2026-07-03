const express = require("express");
const router = express.Router();

const {
  nearbyRestaurants,
  fuelStations,
  touristAttractions,
  directions,
} = require("../controllers/maps.controller");

const { validateCoords, validateDirectionsQuery } = require("../middleware/validateMaps");

router.get("/restaurants", validateCoords, nearbyRestaurants);
router.get("/fuel-stations", validateCoords, fuelStations);
router.get("/attractions", validateCoords, touristAttractions);
router.get("/directions", validateDirectionsQuery, directions);

module.exports = router;
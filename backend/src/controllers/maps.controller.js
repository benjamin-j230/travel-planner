const { getNearbyRestaurants } = require("../services/nearbyRestaurants.service");
const { getFuelStations } = require("../services/fuelStations.service");
const { getTouristAttractions } = require("../services/touristAttractions.service");
const { getDirections } = require("../services/directions.service");

const nearbyRestaurants = async (req, res) => {
  try {
    const { lat, lng, radius } = req.query;
    const results = await getNearbyRestaurants({
      lat: Number(lat),
      lng: Number(lng),
      radius: radius ? Number(radius) : undefined,
    });
    res.status(200).json({ success: true, count: results.length, data: results });
  } catch (error) {
    console.error("Nearby Restaurants Error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

const fuelStations = async (req, res) => {
  try {
    const { lat, lng, radius } = req.query;
    const results = await getFuelStations({
      lat: Number(lat),
      lng: Number(lng),
      radius: radius ? Number(radius) : undefined,
    });
    res.status(200).json({ success: true, count: results.length, data: results });
  } catch (error) {
    console.error("Fuel Stations Error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

const touristAttractions = async (req, res) => {
  try {
    const { lat, lng, radius } = req.query;
    const results = await getTouristAttractions({
      lat: Number(lat),
      lng: Number(lng),
      radius: radius ? Number(radius) : undefined,
    });
    res.status(200).json({ success: true, count: results.length, data: results });
  } catch (error) {
    console.error("Tourist Attractions Error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

const directions = async (req, res) => {
  try {
    const { origin, destination, mode } = req.query;
    const result = await getDirections({ origin, destination, mode });
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error("Directions Error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { nearbyRestaurants, fuelStations, touristAttractions, directions };
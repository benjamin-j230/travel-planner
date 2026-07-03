const axios = require("axios");
const { geocodeAddress } = require("./geocode.service");

const ORS_API_KEY = process.env.ORS_API_KEY;

if (!ORS_API_KEY) {
  console.warn(
    "ORS_API_KEY is not set. Directions routes will fail until it is configured in .env"
  );
}

const orsClient = axios.create({
  baseURL: "https://api.openrouteservice.org",
  timeout: 10000,
});

const ORS_PROFILES = {
  driving: "driving-car",
  walking: "foot-walking",
  bicycling: "cycling-regular",
  transit: "driving-car",
};

const resolveCoords = async (input) => {
  const coordPattern = /^-?\d+(\.\d+)?,\s*-?\d+(\.\d+)?$/;

  if (coordPattern.test(input.trim())) {
    const [lat, lng] = input.split(",").map(Number);
    return { lat, lng };
  }

  return geocodeAddress(input);
};

const getDirections = async ({ origin, destination, mode = "driving" }) => {
  const [originCoords, destCoords] = await Promise.all([
    resolveCoords(origin),
    resolveCoords(destination),
  ]);

  const profile = ORS_PROFILES[mode] || "driving-car";

  const res = await orsClient.post(
    `/v2/directions/${profile}/geojson`,
    {
      coordinates: [
        [originCoords.lng, originCoords.lat],
        [destCoords.lng, destCoords.lat],
      ],
    },
    {
      headers: {
        Authorization: ORS_API_KEY,
        "Content-Type": "application/json",
      },
    }
  );

  const feature = res.data.features[0];
  const summary = feature.properties.summary;
  const steps = feature.properties.segments[0].steps;

  return {
    distance: {
      text: `${(summary.distance / 1000).toFixed(1)} km`,
      value: summary.distance,
    },
    duration: {
      text: `${Math.round(summary.duration / 60)} mins`,
      value: summary.duration,
    },
    startAddress: origin,
    endAddress: destination,
    originCoords,
    destinationCoords: destCoords,
    steps: steps.map((s) => ({
      instruction: s.instruction,
      distance: `${(s.distance / 1000).toFixed(2)} km`,
      duration: `${Math.round(s.duration / 60)} mins`,
    })),
    routeCoordinates: feature.geometry.coordinates,
    bounds: feature.bbox,
  };
};

module.exports = { getDirections };
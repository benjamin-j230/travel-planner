const axios = require("axios");


const nominatimClient = axios.create({
  baseURL: "https://nominatim.openstreetmap.org",
  timeout: 8000,
  headers: {
    "User-Agent": "TravelAppStudentProject/1.0 (replace-with-your-email@example.com)",
  },
});

const geocodeAddress = async (query) => {
  const res = await nominatimClient.get("/search", {
    params: { q: query, format: "json", limit: 1 },
  });

  if (!res.data || res.data.length === 0) {
    throw new Error(`No location found for "${query}"`);
  }

  const { lat, lon, display_name } = res.data[0];
  return { lat: Number(lat), lng: Number(lon), displayName: display_name };
};

module.exports = { geocodeAddress };
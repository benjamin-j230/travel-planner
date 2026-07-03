const axios = require("axios");

const overpassClient = axios.create({
  baseURL: "https://overpass-api.de/api",
  timeout: 30000,
  headers: {
    "Accept": "application/json",
    "User-Agent": "travel-app/1.0",
  },
});

module.exports = { overpassClient };
const { overpassClient } = require("../config/overpass");
const { formatOverpassElement } = require("../utils/overpassFormatter");

const getFuelStations = async ({ lat, lng, radius = 5000 }) => {
  const query = `
[out:json][timeout:25];
(
  node["amenity"="fuel"](around:${radius},${lat},${lng});
  way["amenity"="fuel"](around:${radius},${lat},${lng});
);
out center tags;
`;

  const res = await overpassClient.post(
    "/interpreter",
    `data=${encodeURIComponent(query)}`,
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  );

  return (res.data.elements || [])
    .map((el) => formatOverpassElement(el, "fuel_station"));

};

module.exports = { getFuelStations };
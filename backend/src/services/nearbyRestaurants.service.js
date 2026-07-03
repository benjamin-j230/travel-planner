const { overpassClient } = require("../config/overpass");
const { formatOverpassElement } = require("../utils/overpassFormatter");

const getNearbyRestaurants = async ({ lat, lng, radius = 3000 }) => {
  const query = `
[out:json][timeout:25];
(
  node["amenity"="restaurant"](around:${radius},${lat},${lng});
  way["amenity"="restaurant"](around:${radius},${lat},${lng});
  relation["amenity"="restaurant"](around:${radius},${lat},${lng});
);
out tags center;
`;

  const res = await overpassClient.post(
    "/interpreter",
    new URLSearchParams({ data: query }).toString(),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "travel-app/1.0",
      },
    }
  );

  return (res.data.elements || [])
    .filter((el) => el.tags?.name)
    .map((el) => formatOverpassElement(el, "restaurant"));
};

module.exports = { getNearbyRestaurants };
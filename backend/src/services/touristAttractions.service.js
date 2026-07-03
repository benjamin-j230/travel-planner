const { overpassClient } = require("../config/overpass");
const { formatOverpassElement } = require("../utils/overpassFormatter");


const EXCLUDED_TOURISM_TYPES = ["hotel", "motel", "guest_house", "hostel", "apartment"];

const getTouristAttractions = async ({ lat, lng, radius = 8000 }) => {
  const query = `
[out:json][timeout:25];
(
  node["tourism"](around:${radius},${lat},${lng});
  way["tourism"](around:${radius},${lat},${lng});
);
out center tags;
`;

  const res = await overpassClient.post(
    "/interpreter",
    `data=${encodeURIComponent(query)}`,
    { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
  );

  return (res.data.elements || [])
    .filter((el) => el.tags?.name && !EXCLUDED_TOURISM_TYPES.includes(el.tags.tourism))
    .map((el) => formatOverpassElement(el, "attraction"));
};

module.exports = { getTouristAttractions };
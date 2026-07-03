// Normalizes Overpass's node/way response shape into something consistent
const formatOverpassElement = (el, category) => {
  const location =
    el.type === "node"
      ? { lat: el.lat, lng: el.lon }
      : { lat: el.center?.lat, lng: el.center?.lon }; // "way" elements only get a center when queried with "out center"

  const tags = el.tags || {};

  return {
    osmId: `${el.type}/${el.id}`,
    name: tags.name || "Unnamed",
    category,
    address:
      [tags["addr:housenumber"], tags["addr:street"], tags["addr:city"]]
        .filter(Boolean)
        .join(", ") || null,
    location,
    openingHours: tags.opening_hours || null,
    phone: tags.phone || tags["contact:phone"] || null,
    website: tags.website || tags["contact:website"] || null,
  };
};

module.exports = { formatOverpassElement };
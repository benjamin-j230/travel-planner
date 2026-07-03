import { useState, useEffect } from "react";
import { getNearbyRestaurants, getFuelStations, getTouristAttractions } from "../api/mapsApi";
import MapView from "../components/maps/MapView";
import PlaceCard from "../components/maps/PlaceCard";
import ReviewList from "../components/maps/ReviewList";
import "../styles/maps.css";

const TABS = [
  { key: "restaurants", label: "Restaurants", fetcher: getNearbyRestaurants },
  { key: "fuel", label: "Fuel Stations", fetcher: getFuelStations },
  { key: "attractions", label: "Attractions", fetcher: getTouristAttractions },
];

const ExploreNearby = () => {
  const [activeTab, setActiveTab] = useState("restaurants");
  const [coords, setCoords] = useState(null);
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Get the user's location once on mount
  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      () => setError("Location permission denied. Please enable location access and refresh.")
    );
  }, []);

  useEffect(() => {
    if (!coords) return;
    fetchPlaces();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coords, activeTab]);

  const fetchPlaces = async () => {
    setLoading(true);
    setError("");
    setSelectedPlace(null);
    try {
      const tab = TABS.find((t) => t.key === activeTab);
      const res = await tab.fetcher({ lat: coords.lat, lng: coords.lng, radius: 3000 });
      setPlaces(res.data);
    } catch (err) {
      setError(err.message || "Failed to load nearby places");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="explore-page">
      <h1>Explore Nearby</h1>

      <div className="explore-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={activeTab === tab.key ? "active" : ""}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {error && <p className="ai-error">{error}</p>}
      {loading && <p className="explore-loading">Loading nearby places...</p>}

      {coords && <MapView center={coords} markers={places} onMarkerClick={setSelectedPlace} />}

      <div className="explore-results">
        {places.map((place) => (
          <PlaceCard key={place.osmId} place={place} onSelect={setSelectedPlace} />
        ))}
      </div>

      {selectedPlace && (
        <div className="place-detail-panel">
          <h2>{selectedPlace.name}</h2>
          {selectedPlace.address && <p>{selectedPlace.address}</p>}
          {selectedPlace.openingHours && <p>🕒 {selectedPlace.openingHours}</p>}
          {selectedPlace.phone && <p>📞 {selectedPlace.phone}</p>}
          {selectedPlace.website && (
            <p>
              <a href={selectedPlace.website} target="_blank" rel="noreferrer">
                Visit website
              </a>
            </p>
          )}

          {/* Reviews live in our own MongoDB (not OSM), and feed straight into
              Member 4's Review Summarizer via the "Summarize with AI" button */}
          <ReviewList
            placeId={selectedPlace.osmId}
            placeName={selectedPlace.name}
            placeType={selectedPlace.category}
          />
        </div>
      )}
    </div>
  );
};

export default ExploreNearby;
import { useState } from "react";
import { getDirections } from "../api/mapsApi";
import DirectionsPanel from "../components/maps/DirectionsPanel";
import MapView from "../components/maps/MapView";
import "../styles/maps.css";

const Directions = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [mode, setMode] = useState("driving");
  const [directions, setDirections] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setDirections(null);

    try {
      const res = await getDirections({ origin, destination, mode });
      setDirections(res.data);
    } catch (err) {
      setError(err.message || "Failed to fetch directions");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="directions-page">
      <h1>Get Directions</h1>

      <form className="ai-form" onSubmit={handleSubmit}>
        <input
          placeholder="Origin (address or lat,lng)"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          required
        />
        <input
          placeholder="Destination (address or lat,lng)"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
        />
        <select value={mode} onChange={(e) => setMode(e.target.value)}>
          <option value="driving">Driving</option>
          <option value="walking">Walking</option>
          <option value="bicycling">Bicycling</option>
        </select>
        <button type="submit" disabled={loading}>
          {loading ? "Fetching..." : "Get Directions"}
        </button>
      </form>

      {error && <p className="ai-error">{error}</p>}

      {directions && (
        <MapView center={directions.originCoords} routeCoordinates={directions.routeCoordinates} zoom={12} />
      )}

      <DirectionsPanel directions={directions} />
    </div>
  );
};

export default Directions;
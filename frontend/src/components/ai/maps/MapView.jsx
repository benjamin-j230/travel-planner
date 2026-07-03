import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Vite/webpack break Leaflet's default marker icon paths - this fixes it
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

/**
 * center: { lat, lng }
 * markers: array of { name, location: { lat, lng } }
 * routeCoordinates: optional GeoJSON [lng, lat][] from the Directions API - draws a route line
 */
const MapView = ({ center, markers = [], zoom = 14, onMarkerClick, routeCoordinates }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markerLayer = useRef(null);
  const routeLayer = useRef(null);

  useEffect(() => {
    if (!mapInstance.current) {
      mapInstance.current = L.map(mapRef.current).setView([center.lat, center.lng], zoom);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(mapInstance.current);
      markerLayer.current = L.layerGroup().addTo(mapInstance.current);
    } else {
      mapInstance.current.setView([center.lat, center.lng], zoom);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [center]);

  useEffect(() => {
    if (!markerLayer.current) return;
    markerLayer.current.clearLayers();
    markers
      .filter((place) => place.location?.lat && place.location?.lng)
      .forEach((place) => {
        const marker = L.marker([place.location.lat, place.location.lng]).bindPopup(place.name);
        marker.on("click", () => onMarkerClick?.(place));
        markerLayer.current.addLayer(marker);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markers]);

  useEffect(() => {
    if (!mapInstance.current) return;
    if (routeLayer.current) {
      mapInstance.current.removeLayer(routeLayer.current);
      routeLayer.current = null;
    }
    if (routeCoordinates?.length) {
      const latLngs = routeCoordinates.map(([lng, lat]) => [lat, lng]);
      routeLayer.current = L.polyline(latLngs, { color: "#2563eb", weight: 4 }).addTo(mapInstance.current);
      mapInstance.current.fitBounds(routeLayer.current.getBounds());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeCoordinates]);

  return <div ref={mapRef} className="map-view" />;
};

export default MapView;
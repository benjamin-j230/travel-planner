const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const handleResponse = async (res) => {
  const data = await res.json();
  if (!res.ok || data.success === false) {
    throw new Error(data.message || "Request failed");
  }
  return data;
};

export const getNearbyRestaurants = async ({ lat, lng, radius }) => {
  const params = new URLSearchParams({ lat, lng, ...(radius && { radius }) });
  const res = await fetch(`${API_BASE_URL}/maps/restaurants?${params}`);
  return handleResponse(res);
};

export const getFuelStations = async ({ lat, lng, radius }) => {
  const params = new URLSearchParams({ lat, lng, ...(radius && { radius }) });
  const res = await fetch(`${API_BASE_URL}/maps/fuel-stations?${params}`);
  return handleResponse(res);
};

export const getTouristAttractions = async ({ lat, lng, radius }) => {
  const params = new URLSearchParams({ lat, lng, ...(radius && { radius }) });
  const res = await fetch(`${API_BASE_URL}/maps/attractions?${params}`);
  return handleResponse(res);
};

export const getDirections = async ({ origin, destination, mode }) => {
  const params = new URLSearchParams({ origin, destination, ...(mode && { mode }) });
  const res = await fetch(`${API_BASE_URL}/maps/directions?${params}`);
  return handleResponse(res);
};
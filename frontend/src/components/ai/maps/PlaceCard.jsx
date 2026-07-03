const PlaceCard = ({ place, onSelect }) => {
  return (
    <div className="place-card" onClick={() => onSelect?.(place)}>
      <h3>{place.name}</h3>
      {place.address && <p className="place-address">{place.address}</p>}
      <div className="place-meta">
        {place.openingHours && <span>🕒 {place.openingHours}</span>}
        {place.phone && <span>📞 {place.phone}</span>}
      </div>
    </div>
  );
};

export default PlaceCard;
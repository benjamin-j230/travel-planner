import {useEffect, useState} from "react";
import axios from "axios";

export default function Hotels() {
  const [hotels,setHotels]=useState([])
  useEffect(() => {
  const fetchHotels = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/ai/find-hotels",
        {
          data: localStorage.getItem("searchPlace"),
        }
      );

      setHotels(res.data.hotels); // Use the correct property name
    } catch (err) {
      console.error(err);
    }
  };

  fetchHotels();
}, []);
console.log(hotels)
  return (
    <section className="max-w-7xl mx-auto px-8 py-12">
      <h2 className="text-[1.6rem] font-bold mb-5">Recommended Hotels Near {localStorage.getItem("searchPlace")}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hotels.map(( hotel ) => (
          <div
            key={hotel.name}
            className="bg-white rounded-xl overflow-hidden shadow-[0_4px_14px_rgba(15,39,72,0.08)] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(15,39,72,0.14)] transition-all duration-150"
          >
            <img src={hotel.image} alt={hotel.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <div className="font-bold text-[1.02rem] mb-1">{hotel.name}</div>
              <div className="font-bold text-[1.05rem] mb-3">
                {hotel.price} <span className="font-normal text-[0.8rem] text-[#5b6b82]">/ night</span>
              </div>
             <a
  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${hotel.name} ${hotel.location}`
  )}`}
  target="_blank"
  rel="noreferrer"
  className="block w-full bg-[#1a56db] hover:bg-[#123f9e] text-white text-center py-2.5 rounded-lg font-semibold text-sm transition-colors duration-150"
>
  View Details
</a>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
}

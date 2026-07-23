import {useEffect, useState} from "react";
import axios from "axios";

export default function Estimation() {
  const [estimation,setEstimation]=useState([])
  useEffect(() => {
  const fetchHotels = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/ai/find-total-cost",
        {
          data: localStorage.getItem("searchPlace"),
        }
      );

      setEstimation(res.data.text); // Use the correct property name
    } catch (err) {
      console.error(err);
    }
  };

  fetchHotels();
}, []);

  return (
    <section className="max-w-7xl mx-auto px-8 py-12">
      <div className="bg-white rounded-xl shadow-card p-6 max-w-2xl mx-auto">
        <h2 className="text-[1.3rem] font-bold mb-1">Trip Estimation</h2>
        <div className="text-muted text-sm mb-5"></div>
        <h5>{estimation}</h5>

      </div>
    </section>
  );
}

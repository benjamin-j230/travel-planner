import axios from "axios";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

export default function Home() {
  const [searchPlace, setSearchPlace] = useState("");
  const nav=useNavigate()
  async function searchPlaces(e) {
    e.preventDefault();
    localStorage.setItem("searchPlace",searchPlace)
    try {
      const res=await axios.post("http://localhost:5000/api/ai/trip-planner", {
        data: searchPlace,
      });
      localStorage.removeItem("tripData");
      console.log(res.data.data)
      localStorage.setItem("tripData", JSON.stringify(res.data.data));
      const fuelRes=await axios.post("http://localhost:5000/api/ai/fuel-station",{
        data:searchPlace
      })
      localStorage.removeItem("fuelData")
      localStorage.removeItem("electricData")
      localStorage.setItem("fuelData", JSON.stringify(fuelRes.data.fuel));
      localStorage.setItem("electricData", JSON.stringify(fuelRes.data.electric));
      console.log(fuelRes.data.fuel)
      console.log(fuelRes.data.electric)
    } catch (err) {
      console.log(err);
    }
    nav('/search')
  }
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[480px] flex items-center text-white"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,25,48,0.35), rgba(10,25,48,0.55)), url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 py-16 w-full">
          <h1 className="text-5xl font-extrabold mb-1">AI Travel Planner</h1>
          <h2 className="text-2xl font-semibold mb-5 text-[#eaf1ff]">
            Smart Planning, Happy Journey
          </h2>
          <p className="max-w-lg text-[#dbe4f2] mb-7">
            Discover famous places, best routes, top hotels and trip estimations – all powered by AI.
          </p>
          <form
            className="flex max-w-xl bg-white rounded-lg overflow-hidden shadow-[0_12px_30px_rgba(15,39,72,0.14)]"
            method="get"
            onSubmit={searchPlaces}
          >
            <input
              type="text"
              value={searchPlace}
              onChange={(e) => setSearchPlace(e.target.value)}
              name="q"
              placeholder="Search famous places..."
              className="flex-1 border-none outline-none px-5 py-3.5 text-[0.95rem] text-[#1e2a3a]"
            />
            <button
              type="submit"
              className="bg-[#1a56db] hover:bg-[#123f9e] text-white px-7 py-3.5 font-semibold text-sm transition-colors duration-150 cursor-pointer"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white border-t border-[#e1e6ee]">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.618V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                ),
                title: "Smart Route Planning",
                desc: "Get the best route with real-time data",
              },
              {
                icon: <path d="M3 22h12M3 22V9l6-4 6 4v13M8 22v-6h4v6" />,
                title: "Nearby Fuel Stations",
                desc: "Find fuel stations on your route",
              },
              {
                icon: (
                  <path d="M3 18v-6a4 4 0 014-4h10a4 4 0 014 4v6M3 18h18M5 12V7a2 2 0 012-2h3" />
                ),
                title: "Best Hotels",
                desc: "Recommended hotels near your destination",
              },
              {
                icon: (
                  <>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" />
                  </>
                ),
                title: "Trip Estimation",
                desc: "AI-powered cost estimation",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-full bg-[#e8f0ff] text-[#1a56db] flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    {icon}
                  </svg>
                </div>
                <div>
                  <h4 className="text-[0.95rem] font-semibold mb-1">{title}</h4>
                  <p className="text-[0.82rem] text-[#5b6b82]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Split */}
      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white rounded-xl overflow-hidden shadow-[0_4px_14px_rgba(15,39,72,0.08)]">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
            alt="Traveler looking at mountains"
            className="w-full h-full min-h-80 object-cover"
          />
          <div className="pr-9 py-3">
            <h3 className="text-2xl font-bold mb-4">About AI Travel Planner</h3>
            <p className="text-[#5b6b82] text-[0.95rem] mb-4">
              AI Travel Planner is smart travel companion that helps you plan the perfect trip.
            </p>
            <p className="text-[#5b6b82] text-[0.95rem] mb-4">
              We combine AI technology with real-time data to provide you the best routes, top hotels,
              nearby fuel stations and accurate cost estimations.
            </p>
            <p className="text-[#1a56db] font-bold">Travel smart. Travel happy. ✈️</p>
          </div>
        </div>
      </section>
    </>
  );
}

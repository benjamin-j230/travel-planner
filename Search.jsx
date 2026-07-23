import { Link } from "react-router-dom";
import { useEffect } from 'react'
import { useState } from 'react'

const fuelStations = [
];

export default function Search() {
  const [cards, setCards] = useState([])
  const [longDesc,setLongDesc]=useState(null)
  const [expectedCost,setExpectedCost]=useState(null)
  const [to,setTo]=useState(null)
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("tripData"))
    setCards(data.destination)
    console.log(cards)
  }, [])
  return (
    <section className="max-w-7xl mx-auto px-8 py-12">
      <h2 className="text-[1.6rem] font-bold mb-1">Search Results</h2>
      <p className="text-[#5b6b82] text-sm mt-1.5 mb-6">Showing results for {localStorage.getItem("searchPlace")} </p>

      <div className="grid grid-cols-1 lg:grid-cols-[2.3fr_1fr] gap-6 items-start">

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((tripData) => (
            <div
              key={tripData.name}
              className="bg-white rounded-xl overflow-hidden shadow-[0_4px_14px_rgba(15,39,72,0.08)]"
            >
              <img
                src={tripData.image}
                alt={tripData.name}
                className="w-full h-40 object-cover"
              />

              <div className="p-4">
                <div className="font-bold">{tripData.name}</div>
                <div>{tripData.description}</div>

                <button to={tripData.name} onClick={()=>{setTo(tripData.name);setLongDesc(tripData.long_desc);setExpectedCost(tripData.expected_cost);localStorage.removeItem("details");localStorage.setItem("details",tripData.name)}} className="block w-full text-center bg-white text-[#1a56db] border border-[#e1e6ee] hover:border-[#1a56db] py-2.5 rounded-lg font-semibold text-sm transition-colors duration-150">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Route Sidebar */}
        <aside className="min-h-[600px] bg-white rounded-xl shadow-[0_4px_14px_rgba(15,39,72,0.08)] p-5">
         ` <h3 className="text-[1.05rem] font-bold mb-3.5">Route Details</h3>`
          <div className="flex flex-col gap-4 mb-4">
            <div>
              
            </div>
            <div>
              <label className="block text-[0.75rem] text-[#5b6b82] mb-1.5">To</label>
              <div className="flex items-center gap-2 font-semibold text-[0.92rem]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e0453c] inline-block" />
                {to}
              </div>
            </div>
          </div>
          <Link
            to="/route"
            className="block w-full text-center bg-white text-[#1a56db] border border-[#e1e6ee] hover:border-[#1a56db] py-2.5 rounded-lg font-semibold text-sm transition-colors duration-150"
          >
            Open Full Route
          </Link><br></br>
           <h3 className="text-[1.05rem] font-bold mb-3.5">{longDesc==null?"":"Description"}</h3>
           <h5 className="text-[1.05rem] font-bold mb-3.5">{longDesc}</h5>
           <br></br><h3 className="text-[1.05rem] font-bold mb-3.5">{expectedCost==null?"":"Estimated price"}</h3>
           <h5 className="text-[1.05rem] font-bold mb-3.5">{expectedCost}</h5>

    
          
        </aside>
      </div>

      {/* Fuel Panel */}
      <div className="bg-white rounded-xl shadow-[0_4px_14px_rgba(15,39,72,0.08)] p-5 mt-6">
        <h3 className="text-[1.05rem] font-bold mb-3.5">Nearby Fuel Stations</h3>
        {fuelStations.map(({ name, dist, color }, i) => (
          <div
            key={name}
            className={`flex items-center justify-between py-3 ${i < fuelStations.length - 1 ? "border-b border-[#e1e6ee]" : ""
              }`}
          >
            <div className="flex items-center gap-2.5 font-semibold text-[0.9rem]">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
              {name}
            </div>
            <div className="text-[#5b6b82] text-[0.85rem]">{dist}</div>
            <a
              href="#"
              className="text-[#1a56db] text-[0.8rem] border border-[#e1e6ee] px-3 py-1.5 rounded font-semibold hover:border-[#1a56db] transition-colors duration-150"
            >
              View on Map
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

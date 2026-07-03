import { Link } from "react-router-dom";

const cards = [
  {
    title: "Paris, France",
    desc: "Famous for the Eiffel Tower, art, fashion and cafes.",
    img: "https://images.unsplash.com/photo-1500313830540-7b6650a74fd0?auto=format&fit=crop&w=600&q=80",
    alt: "Eiffel Tower",
    to: "/route?to=paris",
  },
  {
    title: "Paris Museums",
    desc: "Explore world-class museums like Louvre.",
    img: "https://images.unsplash.com/photo-1550340499-a6c60fc8287c?auto=format&fit=crop&w=600&q=80",
    alt: "Louvre Museum",
    to: "/route?to=paris-museums",
  },
  {
    title: "Arc de Triomphe",
    desc: "Iconic monument in the heart of Paris.",
    img: "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?auto=format&fit=crop&w=600&q=80",
    alt: "Arc de Triomphe",
    to: "/route?to=arc-de-triomphe",
  },
];

const fuelStations = [
  { name: "TotalEnergies", dist: "2.1 km", color: "#1fa971" },
  { name: "BP Express",    dist: "4.3 km", color: "#f5a623" },
  { name: "Esso",          dist: "7.8 km", color: "#e0453c" },
];

export default function Search() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-12">
      <h2 className="text-[1.6rem] font-bold mb-1">Search Results</h2>
      <p className="text-[#5b6b82] text-sm mt-1.5 mb-6">Showing results for "paris"</p>

      <div className="grid grid-cols-1 lg:grid-cols-[2.3fr_1fr] gap-6 items-start">

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ title, desc, img, alt, to }) => (
            <div
              key={title}
              className="bg-white rounded-xl overflow-hidden shadow-[0_4px_14px_rgba(15,39,72,0.08)] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(15,39,72,0.14)] transition-all duration-150"
            >
              <img src={img} alt={alt} className="w-full h-40 object-cover" />
              <div className="p-4">
                <div className="font-bold text-[1.02rem] mb-1">{title}</div>
                <div className="text-[#5b6b82] text-[0.85rem] mb-3.5 min-h-9">{desc}</div>
                <Link
                  to={to}
                  className="block w-full bg-[#1a56db] hover:bg-[#123f9e] text-white text-center py-2.5 rounded-lg font-semibold text-sm transition-colors duration-150"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Route Sidebar */}
        <aside className="bg-white rounded-xl shadow-[0_4px_14px_rgba(15,39,72,0.08)] p-5">
          <h3 className="text-[1.05rem] font-bold mb-3.5">Route Details</h3>
          <div className="flex flex-col gap-4 mb-4">
            <div>
              <label className="block text-[0.75rem] text-[#5b6b82] mb-1.5">From</label>
              <div className="flex items-center gap-2 font-semibold text-[0.92rem]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1fa971] inline-block" />
                Paris, France
              </div>
            </div>
            <div>
              <label className="block text-[0.75rem] text-[#5b6b82] mb-1.5">To</label>
              <div className="flex items-center gap-2 font-semibold text-[0.92rem]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#e0453c] inline-block" />
                Versailles Palace, France
              </div>
            </div>
          </div>
          <Link
            to="/route"
            className="block w-full text-center bg-white text-[#1a56db] border border-[#e1e6ee] hover:border-[#1a56db] py-2.5 rounded-lg font-semibold text-sm transition-colors duration-150"
          >
            Open Full Route
          </Link>
        </aside>
      </div>

      {/* Fuel Panel */}
      <div className="bg-white rounded-xl shadow-[0_4px_14px_rgba(15,39,72,0.08)] p-5 mt-6">
        <h3 className="text-[1.05rem] font-bold mb-3.5">Nearby Fuel Stations</h3>
        {fuelStations.map(({ name, dist, color }, i) => (
          <div
            key={name}
            className={`flex items-center justify-between py-3 ${
              i < fuelStations.length - 1 ? "border-b border-[#e1e6ee]" : ""
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

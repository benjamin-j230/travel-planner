const fuelStations = [
  { name: "TotalEnergies", dist: "2.1 km", color: "#1fa971" },
  { name: "BP Express",    dist: "4.3 km", color: "#f39c12" },
  { name: "Esso",          dist: "7.8 km", color: "#ff4d4d" },
];

const stats = [
  { label: "Distance",            value: "23.4 km"    },
  { label: "Travel Time",         value: "35 mins"    },
  { label: "Best Route",          value: "A13 Highway"},
  { label: "Estimated Fuel Cost", value: "€4.20"      },
];

export default function Route() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 my-10">
      <h2 className="text-3xl font-bold mb-8">Route Details</h2>

      {/* Route Panel */}
      <div className="bg-white p-8 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]">

        {/* From / To */}
        <div className="flex flex-wrap items-center justify-between gap-5 mb-8">
          <div className="flex-1">
            <label className="block text-[#777] text-sm mb-2">From</label>
            <div className="flex items-center text-lg font-semibold">
              <span className="inline-block w-3 h-3 rounded-full bg-[#18b76a] mr-2" />
              Paris, France
            </div>
          </div>

          <div className="text-2xl text-[#1a56db] mt-5">⇄</div>

          <div className="flex-1">
            <label className="block text-[#777] text-sm mb-2">Destination</label>
            <div className="flex items-center text-lg font-semibold">
              <span className="inline-block w-3 h-3 rounded-full bg-[#ff4d4d] mr-2" />
              Versailles Palace, France
            </div>
          </div>
        </div>

        {/* Stat Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
          {stats.map(({ label, value }) => (
            <div key={label} className="bg-[#f5f8ff] p-5 rounded-xl">
              <div className="text-[#666] text-sm mb-2.5">{label}</div>
              <div className="text-[22px] font-bold text-[#2457ff]">{value}</div>
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="w-full h-[500px] overflow-hidden rounded-2xl">
          <iframe
            src="https://www.google.com/maps?q=Versailles%20Palace,France&output=embed"
            allowFullScreen
            loading="lazy"
            className="w-full h-full border-0"
            title="Route Map"
          />
        </div>
      </div>

      {/* Fuel Panel */}
      <div className="bg-white mt-8 p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <h3 className="text-lg font-bold mb-5">Nearby Fuel Stations</h3>

        {fuelStations.map(({ name, dist, color }, i) => (
          <div
            key={name}
            className={`flex justify-between items-center py-[18px] ${
              i < fuelStations.length - 1 ? "border-b border-[#eee]" : ""
            }`}
          >
            <div>
              <span
                className="inline-block w-3 h-3 rounded-full mr-2.5"
                style={{ background: color }}
              />
              <strong>{name}</strong>
            </div>
            <div>{dist}</div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#2457ff] font-semibold no-underline"
            >
              Open in Maps
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8 text-right">
        <a
          href="/estimation"
          className="inline-block bg-[#2457ff] hover:bg-[#123f9e] text-white px-6 py-3 rounded-lg font-semibold no-underline transition-colors duration-150"
        >
          View Trip Estimation →
        </a>
      </div>
    </section>
  );
}

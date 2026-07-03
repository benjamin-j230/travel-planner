export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center bg-white rounded-xl overflow-hidden shadow-[0_4px_14px_rgba(15,39,72,0.08)]">
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
          alt="Traveler with arms open facing mountains"
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
  );
}

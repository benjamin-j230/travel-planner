const hotels = [
  {
    name: "Le Meurice",
    type: "Luxury Hotel",
    price: "€520",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
    alt: "Le Meurice",
  },
  {
    name: "Hôtel Plaza Athénée",
    type: "5 Star Hotel",
    price: "€450",
    img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=600&q=80",
    alt: "Hôtel Plaza Athénée",
  },
  {
    name: "Pullman Paris Tour Eiffel",
    type: "4 Star Hotel",
    price: "€280",
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80",
    alt: "Pullman Paris Tour Eiffel",
  },
];

export default function Hotels() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-12">
      <h2 className="text-[1.6rem] font-bold mb-5">Recommended Hotels Near Paris</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {hotels.map(({ name, type, price, img, alt }) => (
          <div
            key={name}
            className="bg-white rounded-xl overflow-hidden shadow-[0_4px_14px_rgba(15,39,72,0.08)] hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(15,39,72,0.14)] transition-all duration-150"
          >
            <img src={img} alt={alt} className="w-full h-40 object-cover" />
            <div className="p-4">
              <div className="font-bold text-[1.02rem] mb-1">{name}</div>
              <div className="text-[#f5a623] text-sm mb-0.5">★★★★★</div>
              <div className="text-[#5b6b82] text-[0.82rem] mb-2.5">{type}</div>
              <div className="font-bold text-[1.05rem] mb-3">
                {price} <span className="font-normal text-[0.8rem] text-[#5b6b82]">/ night</span>
              </div>
              <a
                href="#"
                className="block w-full bg-[#1a56db] hover:bg-[#123f9e] text-white text-center py-2.5 rounded-lg font-semibold text-sm transition-colors duration-150"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <a
          href="#"
          className="inline-flex items-center justify-center bg-white text-[#1a56db] border border-[#e1e6ee] hover:border-[#1a56db] px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors duration-150"
        >
          View More Hotels
        </a>
      </div>
    </section>
  );
}

export default function Estimation() {
  const costs = [
    {
      label: "Fuel Cost",
      amount: "€4.20",
      icon: <path d="M3 22h12M3 22V9l6-4 6 4v13M8 22v-6h4v6" />,
    },
    {
      label: "Hotel Cost",
      amount: "€450.00",
      icon: (
        <>
          <rect x="2" y="7" width="20" height="12" rx="2" />
          <path d="M2 12h20M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
        </>
      ),
    },
    {
      label: "Food Cost",
      amount: "€120.00",
      icon: <path d="M3 2v7a4 4 0 008 0V2M7 2v20M17 2v9a3 3 0 003 3v9" />,
    },
    {
      label: "Activities",
      amount: "€80.00",
      icon: (
        <>
          <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
          <circle cx="12" cy="13" r="4" />
        </>
      ),
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-12">
      <div className="bg-white rounded-xl shadow-card p-6 max-w-2xl mx-auto">
        <h2 className="text-[1.3rem] font-bold mb-1">Trip Estimation</h2>
        <div className="text-muted text-sm mb-5">Paris, France</div>

        {/* Cost Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-5">
          {costs.map(({ label, amount, icon }) => (
            <div key={label} className="bg-[#f6f8fc] rounded-lg p-4 text-center">
              <div className="w-8 h-8 rounded-full bg-[#e8f0ff] text-blue flex items-center justify-center mx-auto mb-2.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  {icon}
                </svg>
              </div>
              <div className="text-[0.75rem] text-muted mb-1">{label}</div>
              <div className="font-bold text-[0.95rem]">{amount}</div>
            </div>
          ))}
        </div>

        {/* Total Banner */}
        <div className="bg-blue text-white rounded-lg text-center py-6">
          <div className="text-sm opacity-90 mb-1.5">Total Estimated Cost</div>
          <div className="text-4xl font-extrabold">€654.20</div>
          <div className="text-xs opacity-85 mt-1.5">*Estimated cost for 2 days trip</div>
        </div>
      </div>
    </section>
  );
}

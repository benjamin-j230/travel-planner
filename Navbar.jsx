import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/search", label: "Destinations" },
  { to: "/route", label: "Route" },
  { to: "/hotels", label: "Hotels" },
  { to: "/estimation", label: "Estimation" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="bg-[#0f2748] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 font-bold text-white no-underline">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4d8dff" strokeWidth="2">
            <path d="M22 2 11 13" />
            <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
          </svg>
          AI Travel Planner
        </NavLink>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `text-sm pb-1 border-b-2 transition-colors duration-150 ${
                  isActive
                    ? "text-white font-semibold border-[#1a56db]"
                    : "text-[#cfd9e8] border-transparent hover:text-white"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

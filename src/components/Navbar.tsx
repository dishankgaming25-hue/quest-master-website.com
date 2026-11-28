
import { Link, NavLink } from "react-router-dom";
import { Crown, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "Commands", path: "/commands" },
  { name: "Statistics", path: "/stats" },
  { name: "Support", path: "/support" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090611]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600/20 text-yellow-400">
            <Crown size={23} />
          </div>
          <div>
            <span className="block text-lg font-extrabold tracking-wide">
              QUEST <span className="text-yellow-400">MASTER</span>
            </span>
            <span className="text-xs text-gray-400">Level up your community</span>
          </div>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition ${
                  isActive
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <Link
          to="/dashboard"
          className="hidden rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-bold transition hover:bg-purple-500 md:block"
        >
          Dashboard
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#100b1c] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium ${
                    isActive ? "text-yellow-400" : "text-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/dashboard"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg bg-purple-600 px-4 py-3 text-center font-bold"
            >
              Open Dashboard
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


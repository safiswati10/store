import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const NavLinks = () => (
    <>
      <Link to="/" className="hover:text-primary transition">
        Home
      </Link>

      <Link to="/products" className="hover:text-primary transition">
        Products
      </Link>

      <Link to="/categories" className="hover:text-primary transition">
        Categories
      </Link>
    </>
  );

  const AuthLinks = () => (
    <>
      <Link to="/login" className="hover:text-primary transition text-sm">
        Login
      </Link>

      <Link
        to="/register"
        className="bg-primary text-black px-4 py-1 rounded-full text-sm hover:scale-105 transition"
      >
        Register
      </Link>
    </>
  );

  return (
    <nav className="bg-card border-b border-gray-800 px-4 md:px-6 py-4">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* BRAND */}
        <div className="text-primary text-2xl font-bold">
          eStore
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <NavLinks />
        </div>

        {/* RIGHT ACTIONS */}
        <div className="hidden md:flex items-center gap-4">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-dark px-3 py-1 rounded-full text-sm outline-none border border-gray-700"
          />

          <AuthLinks />
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-2">

          <NavLinks />

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-dark px-3 py-2 rounded-full text-sm outline-none border border-gray-700"
          />

          <AuthLinks />

        </div>
      )}
    </nav>
  );
}
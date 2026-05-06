import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-md py-2" : "bg-white/80 backdrop-blur-md py-4"}
      `}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between transition-all duration-300">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="FixEh Handyman Services Logo"
            className={`transition-all duration-300 ${
              scrolled ? "h-10" : "h-14"
            }`}
          />
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm md:text-base font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-brandRed transition ${
                isActive ? "text-brandBlue" : "text-gray-700"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              `hover:text-brandRed transition ${
                isActive ? "text-brandBlue" : "text-gray-700"
              }`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-brandRed transition ${
                isActive ? "text-brandBlue" : "text-gray-700"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;

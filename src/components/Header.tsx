import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { WOOD_SLAT_PATH } from "../data/woodSlat";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: WOOD_SLAT_PATH, label: "Wood Slat Walls" },
  { to: "/home-care-plans", label: "Home Care Plans" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const navLinks = links.map(({ to, label }) => (
    <NavLink key={to} to={to} onClick={() => setMenuOpen(false)}
      className={({ isActive }) => `inline-flex min-h-11 w-full items-center rounded-lg py-2 transition hover:text-brandRed lg:w-auto lg:px-0 ${
        isActive ? "text-brandBlue" : "text-gray-700"
      }`}>
      {label}
    </NavLink>
  ));

  return (
    <header className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled || menuOpen ? "bg-white py-2 shadow-md" : "bg-white/80 py-4 backdrop-blur-md"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-4">
        <Link to="/" onClick={() => setMenuOpen(false)} className="flex shrink-0 items-center" aria-label="FixEh Handyman Services home">
          <img src="/logo.png" alt="FixEh Handyman Services Logo" className={`w-auto transition-all duration-300 ${
    scrolled || menuOpen ? "h-10" : "h-14"
  }`} />
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-5 text-sm font-medium lg:flex lg:gap-7 lg:text-base">{navLinks}</nav>
        <button ref={menuButton} type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen ? "Close menu" : "Open menu"} className="flex h-11 w-11 items-center justify-center rounded-xl text-brandBlue hover:bg-brandLight lg:hidden">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
{menuOpen && (
  <div className="mx-auto max-w-6xl px-4 lg:hidden">
    <nav
      id="mobile-navigation"
      aria-label="Mobile navigation"
      className="
        mt-3 flex max-h-[calc(100vh-88px)] flex-col
        overflow-y-auto border-t border-gray-200
        pt-3 pb-4 text-base font-medium
      "
    >
      {navLinks}
    </nav>
  </div>
)}
    </header>
  );
}

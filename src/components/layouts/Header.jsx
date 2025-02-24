import React from "react";
import { useState } from "react";
import { User, Rocket, LayoutDashboard, X, AlignLeft } from "lucide-react";
import { Link } from "react-scroll";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Sobre mi", to: "sobremi", icon: <User /> },
    { name: "Habilidades", to: "habilidades", icon: <Rocket /> },
    { name: "Proyectos", to: "proyectos", icon: <LayoutDashboard /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-b-zinc-700 bg-darkBlack text-customWhite">
      <div className="mx-auto max-w-7xl px-5 py-2 md:py-4 md:px-10 lg:px-34 xl:px-60 flex flex-row md:justify-between items-center">
        <div>
          <Link
            to="perfil"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-zinc-300 transform transition-all duration-300"
          >
            Jazmin Boada
          </Link>
        </div>

        <ul className="hidden md:flex flex-row items-center space-x-4">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="relative after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 cursor-pointer"
            >
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="flex items-center"
                onClick={handleLinkClick}
              >
                <span className="flex items-center space-x-2">
                  <span className="w-5 h-5">{link.icon}</span>
                  <span>{link.name}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden ml-auto text-2xl relative">
          <button
            onClick={toggleMenu}
            className="relative flex items-center justify-center w-10 h-10 transition-transform duration-300"
          >
            <span
              className={`absolute transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            >
              <AlignLeft />
            </span>
            <span
              className={`absolute transition-opacity duration-300 ${
                isMenuOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              <X />
            </span>
          </button>
        </div>

        {/* Fondo blur */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40 mt-16"
            style={{ zIndex: 40 }}
          />
        )}

        {/* Menu */}
        <section
          className={`md:hidden fixed top-0 right-0 mt-14 w-full pb-5 transition-transform duration-300 ease-in-out bg-darkBlack text-customWhite ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ zIndex: 50 }}
        >
          <ul>
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="inline px-6 py-2 transform transition-all duration-300"
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="flex items-center"
                  onClick={handleLinkClick}
                >
                  <span className="flex items-center space-x-2 pl-2">
                    <span className="w-5 h-5">{link.icon}</span>
                    <span>{link.name}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </header>
  );
}

export default Header;

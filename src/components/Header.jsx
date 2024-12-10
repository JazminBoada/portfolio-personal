import React from "react";
import { useState } from "react";
import { User, Rocket, LayoutDashboard, X, AlignLeft } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-b-zinc-700 bg-darkBlack text-customWhite">
      <div className="mx-auto max-w-7xl px-5 py-2 md:py-4 md:px-10 lg:px-34 xl:px-60 flex flex-row md:justify-between items-center">
        <div>
          <span className="">Jazmin Boada</span>
        </div>

        <ul className="hidden md:flex flex-row items-center space-x-4">
          <li className="relative after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 cursor-pointer">
            <span className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              Sobre mi
            </span>
          </li>
          <li className="relative after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 cursor-pointer">
            <span className="flex items-center">
              <Rocket className="w-5 h-5 mr-2" /> Habilidades
            </span>
          </li>
          <li className="relative after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 cursor-pointer">
            <span className="flex items-center">
              <LayoutDashboard className="w-5 h-5 mr-2" /> Proyectos
            </span>
          </li>
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

        {/* Menu */}
        <section
          className={`md:hidden fixed top-0 right-0 mt-16 w-full bg-white shadow-lg rounded-lg transition-transform duration-300 ease-in-out bg-darkBlack text-customWhite ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ zIndex: 50 }}
        >
          <ul className="flex flex-col">
            <li className="inline px-6 py-2 hover:bg-slate-200 hover:text-blue-regular transform transition-all duration-300">
              <span className="flex items-center space-x-2 ">
                <User className="w-5 h-5" />
                <span>Sobre mi</span>
              </span>
            </li>
            <li className="inline px-6 py-2 hover:bg-slate-200 hover:text-blue-regular transform transition-all duration-300">
              <span className="flex items-center space-x-2">
                <Rocket className="w-5 h-5" />
                <span>Habilidades</span>
              </span>
            </li>
            <li className="inline px-6 py-2 hover:bg-slate-200 hover:text-blue-regular transform transition-all duration-300">
              <span className="flex items-center space-x-2">
                <LayoutDashboard className="w-5 h-5" />
                <span>Proyectos</span>
              </span>
            </li>
          </ul>
        </section>
      </div>
    </header>
  );
}

export default Header;

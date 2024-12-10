import React from "react";
import profileImage from "../assets/profile.png";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Download } from "lucide-react";

function Hero() {
  return (
    <div className="w-full pt-24 bg-darkBlack text-customWhite">
      <main className="mx-auto max-w-7xl flex flex-col items-center md:flex-row-reverse md:justify-between md:items-start md:px-10 lg:px-34 xl:px-60">
        <div className="lg:w-72 lg:h-72 md:w-56 md:h-56 w-40 h-40">
          <img src={profileImage} alt="profile" />
        </div>

        <div className="flex flex-col justify-center md:justify-start items-center md:items-start space-y-4 pt-5">
          <h2 className="md:text-xl lg:text-2xl">¡Hola! Soy Jazmin Boada</h2>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wider text-center md:text-start pb-2">
            Desarrolladora Web <br />
            Frontend
          </h1>

          <div className="flex flex-row gap-4 p-2">
            <a href="" className="border border-zinc-500 rounded-md p-2">
              <AiFillLinkedin size={27} className="bg-transparent" />
            </a>
            <a href="" className="border border-zinc-500 rounded-md p-2">
              <AiFillGithub size={27} className="bg-transparent" />
            </a>
          </div>

          <section className="flex flex-row gap-4">
            <button className="border border-zinc-500 bg-customWhite text-darkBlack rounded-md px-6">
              Contáctame
            </button>
            <button className="flex flex-row items-center gap-2 bg-lightBlack rounded-md px-3 py-2 border border-zinc-700 hover:bg-customWhite hover:text-darkBlack transform transition-all duration-300">
              Descargar CV <Download className="bg-transparent" size={20} />
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Hero;

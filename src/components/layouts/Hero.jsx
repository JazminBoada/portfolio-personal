import React from "react";
import profileImage from "../../assets/profile.png";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Download } from "lucide-react";

function Hero() {
  return (
    <div className="w-full pt-24 text-customWhite">
      <main className="mx-auto max-w-7xl flex flex-col items-center justify-center md:flex-row-reverse md:justify-between md:items-start md:px-10 lg:px-34 xl:px-60">
        <div className="relative md:w-56 md:h-56 w-40 h-40 pt-5 mb-4">
          {/* Efecto de blur detrás de la imagen */}
          <div className="absolute -inset-5 rounded-full bg-gradient-radial from-[#ae2ae3]/60 to-transparent blur-[100px] opacity-150 z-0" />
          <img
            src={profileImage}
            alt="profile"
            className="relative z-10 rounded-full"
          />
        </div>

        <div className="flex flex-col justify-center md:justify-start items-center md:items-start space-y-4 pt-5">
          <h2 className="md:text-xl lg:text-2xl">¡Hola! Soy Jazmin Boada</h2>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wider text-center md:text-start pb-2">
            Desarrolladora Web <br />
            Frontend
          </h1>

          <div className="flex flex-row gap-4 p-2">
            <a
              href=""
              className="border border-zinc-500 rounded-md p-2 hover:text-zinc-500 hover:border-zinc-500 transform transition-all duration-300"
            >
              <AiFillLinkedin size={27} />
            </a>
            <a
              href=""
              className="border border-zinc-500 rounded-md p-2 hover:text-zinc-500 hover:border-zinc-500 transform transition-all duration-300"
            >
              <AiFillGithub size={27} />
            </a>
          </div>

          <section className="flex flex-row gap-4">
            <button className="border border-zinc-500 bg-customWhite text-darkBlack hover:bg-zinc-300 rounded-md px-6 transform transition-all duration-300">
              Contáctame
            </button>
            <button className="flex flex-row items-center gap-2 bg-lightBlack rounded-md px-3 py-2 border border-zinc-700 hover:bg-zinc-700 transform transition-all duration-300">
              Descargar CV <Download className="bg-transparent" size={20} />
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Hero;

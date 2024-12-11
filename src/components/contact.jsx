import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import {
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
  BsGeoAltFill,
} from "react-icons/bs";
import { SendHorizontal } from "lucide-react";

function Contact() {
  return (
    <div className="w-full pt-12 bg-darkBlack text-customWhite">
      <main className="mx-auto max-w-7xl px-5 md:px-10 lg:px-34 xl:px-60 pb-5">
        <h1 className="text-xl md:text-2xl xl:text-3xl text-center font-semibold mb-10">
          ¡Pongámonos en contacto!
        </h1>

        <form action="" className="flex flex-col space-y-2 md:px-20">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full flex flex-col gap-2">
              <span>Nombre</span>
              <input
                className="px-4 py-2 outline-none bg-lightBlack border border-zinc-700 rounded-md focus:outline-zinc-600 transform transition-all duration-500"
                id="nombre"
                name="nombre"
                type="text"
                required
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <span>Email</span>
              <input
                className="px-4 py-2 outline-none bg-lightBlack border border-zinc-700 rounded-md focus:outline-zinc-600 transform transition-all duration-500"
                id="email"
                name="email"
                type="email"
                required
              />
            </div>
          </div>
          <span>Mensaje</span>
          <textarea
            className="h-40 px-4 py-2 outline-none bg-lightBlack border border-zinc-700 rounded-md focus:outline-zinc-600 transform transition-all duration-500 overflow-hidden"
            id="mensaje"
            name="mensaje"
            required
          ></textarea>

          <div className="flex justify-center">
            <button
              type="submit"
              className="flex flex-row items-center justify-center gap-2 w-full text-sm md:text-lg border-none cursor-pointer rounded-md text-darkBlack bg-customWhite py-2 mt-4 transition-transform duration-200 ease-in-out active:scale-95"
            >
              <div className="relative overflow-hidden group">
                <span className="invisible ">Enviar Mensaje</span>
                <span className="text-darkBlack absolute top-0 left-0 group-hover:-translate-y-full transition-transform ease-in-out duration-500 hover:duration-300">
                  Enviar Mensaje
                </span>
                <span className="text-darkBlack absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform ease-in-out duration-500 hover:duration-300">
                  Enviar Mensaje
                </span>
              </div>
            </button>
          </div>
        </form>

        <section className="w-full mt-20 flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:justify-between md:space-x-16 pb-4 md:border-b border-zinc-700">
          <div className="flex flex-col md:flex-row items-center md:items-center space-y-2 md:space-y-0 md:space-x-2">
            <BsGeoAltFill className="w-6 h-6 mt-3 md:self-start" />
            <div className="flex flex-col items-center md:items-start">
              <h2 className="font-semibold">Dirección</h2>
              <p>San Miguel, Buenos Aires</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-center space-y-2 md:space-y-0 md:space-x-2">
            <BsFillEnvelopeFill className="w-6 h-6 mt-3 md:self-start" />
            <div className="flex flex-col items-center md:items-start">
              <h2 className="font-semibold">Correo Electrónico</h2>
              <p>boadajazmin@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-center space-y-2 md:space-y-0 md:space-x-2">
            <BsFillTelephoneFill className="w-6 h-6 mt-3 md:self-start" />
            <div className="flex flex-col items-center md:items-start">
              <h2 className="font-semibold">Teléfono</h2>
              <p>+54 112255-2864</p>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-center flex-row gap-4 p-5">
          <a
            href=""
            className=" border border-zinc-500 rounded-md p-2 hover:text-zinc-500 hover:border-zinc-500  transform transition-all duration-300"
          >
            <AiFillLinkedin size={27} />
          </a>
          <a
            href=""
            className="border border-zinc-500 rounded-md p-2  hover:text-zinc-500 hover:border-zinc-500 transform transition-all duration-300"
          >
            <AiFillGithub size={27} />
          </a>
        </div>
      </main>
    </div>
  );
}

export default Contact;

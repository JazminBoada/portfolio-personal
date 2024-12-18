import React from "react";

function Aboutme() {
  return (
    <div className=" text-customWhite w-full">
      <main className="mx-auto max-w-7xl px-5 pt-12 md:px-10 lg:px-34 xl:px-60">
        <h1 className="text-xl md:text-2xl font-semibold mb-4">Sobre mi</h1>
        <section className="border border-zinc-700 bg-lightBlack p-4 rounded-md">
          <p className="pb-2">
            Hace 2 años estudio de manera autodidacta para especializarme como
            <b> desarrolladora web Frontend</b>.
          </p>
          <p>
            Me especializo en diseñar interfaces atractivas y funcionales que
            mejoran la experiencia del usuario. También me enfoco en desarrollar
            soluciones innovadoras y fáciles de usar. Soy una persona
            comprometida, con habilidades para el trabajo en equipo y dispuesta
            siempre a nuevos desafíos.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Aboutme;

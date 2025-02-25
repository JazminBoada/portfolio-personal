import React from "react";

function Aboutme() {
  return (
    <div className=" text-customWhite w-full">
      <main className="mx-auto max-w-7xl px-5 pt-12 md:px-10 lg:px-34 xl:px-60">
        <h1 className="text-xl md:text-2xl font-semibold mb-4">Sobre mi</h1>
        <section className="border border-zinc-700 bg-lightBlack p-4 rounded-md">
          <p className="pb-2">
            Hace más de dos años comencé a formarme de manera autodidacta para
            especializarme como
            <b> desarrolladora web Frontend</b>.
          </p>
          <p>
            Llevo a cabo el diseño interfaces atractivas y funcionales que
            mejoran la experiencia del usuario. Me enfoco en desarrollar
            soluciones innovadoras y fáciles de usar. Soy una persona
            comprometida, con habilidades para el trabajo en equipo. Busco
            colaborar con empresas o emprendedores para transformar sus ideas en
            productos digitales efectivos.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Aboutme;

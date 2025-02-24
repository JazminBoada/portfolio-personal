import React from "react";
import ExperienceCard from "../ui/ExperienceCard";

export default function Experience() {
  return (
    <div className=" text-customWhite w-full">
      <main className="mx-auto max-w-7xl px-5 pt-12 md:px-10 lg:px-34 xl:px-60">
        <h1 className="text-xl md:text-2xl font-semibold mb-4">Experiencia</h1>
        <section className="flex flex-col gap-4">
          <ExperienceCard
            title="Frontend Developer"
            subtitle="Empresa 'Tablas Carpincho' | Enero 2025 - Febrero 2025"
            text="Diseño y desarrollo de una Landing Page, un sitio web estático con la finalidad de informar a los clientes acerca de quienes son ellos, los productos y servicios que ofrecen, apoyando así a sus objetivos comerciales. 
            Herramientas de diseño: Figma y Canva. 
            Tecnologías: JavaScript, React.js y TailwindCSS, librerias de JavaScript."
          />
          <ExperienceCard
            title="Diseño Gráfico y Administración de redes sociales"
            subtitle="Empresa 'Tablas Carpincho' | Enero 2022 - Actualidad"
            text="Diseño gráfico y marketing de la marca, creación del logo , flyers y catálogos.
            Construcción y administración redes sociales (Facebook e Instagram). Armado de identidad visual, historias, carruseles, textos, fotos. Manejo de la tienda online - Diseño y administración. Creación y edición de logos empresariales/personales para los clientes, usando programas de ilustración y edición de imágenes. (Krita, Canva, Adobe XD)"
          />
        </section>
      </main>
    </div>
  );
}

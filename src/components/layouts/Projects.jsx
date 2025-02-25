import React from "react";
import ProjectsCards from "../ui/ProjectsCards";
import img1 from "../../assets/imagenes_card/img1.png";
import img2 from "../../assets/imagenes_card/img2.png";
import img3 from "../../assets/imagenes_card/img3.png";
import img4 from "../../assets/imagenes_card/img4.png";
import img6 from "../../assets/imagenes_card/img6.png";

import { FaHtml5, FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";

function Projects() {
  return (
    <div className=" text-customWhite w-full">
      <main className="mx-auto max-w-7xl px-5 pt-12 md:px-10 lg:px-34 xl:px-60 pb-5">
        <h1 className="text-xl md:text-2xl font-semibold mb-4">Proyectos</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <ProjectsCards
            image={img6}
            title="Página Web Tablas Carpincho"
            text="Página web estática para la empresa 'Tablas Carpincho', dedicada a la fabricación de tablas de madera de eucalipto, la finalidad de la página es dar a conocer dicha empresa y sus productos a la venta en su tienda online."
            button={[
              { title: "React.js", icon: <TbBrandReactNative /> },
              { title: "TailwindCSS", icon: <RiTailwindCssFill /> },
            ]}
            appLink="https://tablascarpincho.netlify.app/"
          />
          <ProjectsCards
            image={img1}
            title="E-commerce Landing Page"
            text="Página web estática e-commerce sobre la venta de productos naturales, realice el diseño y desarrollo de este proyecto personal utilizando React.js y TailwindCSS como también librerias de animaciones para hacer de la web más atractiva y dinámica."
            button={[
              { title: "HTML", icon: <FaHtml5 /> },
              { title: "TailwindCSS", icon: <RiTailwindCssFill /> },
              { title: "React.js", icon: <TbBrandReactNative /> },
            ]}
            sourceLink="https://github.com/JazminBoada/shop-landing-page"
            appLink="https://handmadegaia-landingpage.netlify.app/"
          />
          <ProjectsCards
            image={img2}
            title="Notes App"
            text="Aplicación web de notas, donde se puede agregar, editar y eliminar notas, com tambien cambiar el color y el orden. Utilice Next.js y la metodologia CRUD."
            button={[
              { title: "React.js", icon: <TbBrandReactNative /> },
              { title: "TailwindCSS", icon: <RiTailwindCssFill /> },
              { title: "Next.js", icon: <RiNextjsLine /> },
            ]}
            sourceLink="https://github.com/JazminBoada/nextjs-todo-app"
            appLink="https://note-app1-nextjs.vercel.app/"
          />
          <ProjectsCards
            image={img3}
            title="Login Web App"
            text="Diseño y desarrollo de una página de inicio de sesión dinámica, con un diseño minimalista."
            button={[
              { title: "HTML", icon: <FaHtml5 /> },
              { title: "CSS", icon: <FaCss3Alt /> },
              { title: "Javascript", icon: <IoLogoJavascript /> },
            ]}
            sourceLink="https://github.com/JazminBoada/login-page"
            appLink="https://login-design-app.netlify.app/"
          />
          <ProjectsCards
            image={img4}
            title="Translator App"
            text="Aplicación web de traducción de idiomas, donde se puede traducir texto de un idioma a otro. Utilice la API de Mymemory para realizar las traducciones en tiempo real."
            button={[
              { title: "HTML", icon: <FaHtml5 /> },
              { title: "CSS", icon: <FaCss3Alt /> },
              { title: "Javascript", icon: <IoLogoJavascript /> },
            ]}
            sourceLink="https://github.com/JazminBoada/traslator-app"
            appLink="https://traslator-app.netlify.app/"
          />
        </section>
      </main>
    </div>
  );
}

export default Projects;

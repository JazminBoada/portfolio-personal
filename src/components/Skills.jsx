import React from "react";
import IconSkill from "./layouts/iconSkill";
import html from "../assets/iconos/html5.svg";
import css from "../assets/iconos/css.svg";
import javascript from "../assets/iconos/javascript.svg";
import react from "../assets/iconos/react.svg";
import tailwind from "../assets/iconos/tailwindcss.svg";
import next from "../assets/iconos/nextjs_icon_dark.svg";
import vscode from "../assets/iconos/vscode.svg";
import figma from "../assets/iconos/figma.svg";
import zustand from "../assets/iconos/zustand.svg";

function Skills() {
  return (
    <div className="w-full bg-darkBlack text-customWhite">
      <main className="mx-auto max-w-7xl px-5  py-12 md:px-10 lg:px-34 xl:px-60">
        <h1 className="text-xl font-semibold mb-4">
          Habilidades y Herramientas
        </h1>
        <div className="flex flex-row flex-wrap gap-3">
          <IconSkill icon={html} alt="HTML5" />
          <IconSkill icon={css} alt="CSS3" />
          <IconSkill icon={javascript} alt="JavaScript" />
          <IconSkill icon={react} alt="React.js" />
          <IconSkill icon={tailwind} alt="Tailwind CSS" />
          <IconSkill icon={next} alt="Next.js" />
          <IconSkill icon={vscode} alt="VSCode" />
          <IconSkill icon={figma} alt="Figma" />
          <IconSkill icon={zustand} alt="GitHub" />
        </div>
      </main>
    </div>
  );
}

export default Skills;

import React from "react";
import { Github, SquareArrowOutUpRight } from "lucide-react";

const ButtonCard = ({ icon, title }) => {
  return (
    <button className="flex items-center justify-center border border-zinc-700 rounded-md py-1 px-2 text-xs hover:bg-zinc-600 trnasform transition-all duration-300">
      {icon && <span className="mr-1 text-lg">{icon}</span>}
      {title}
    </button>
  );
};

function ProjectsCards({ image, title, text, button, appLink, sourceLink }) {
  return (
    <div className="flex flex-col space-y-4 border border-zinc-700 rounded-md p-4 bg-lightBlack ">
      <div className="rounded-md overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
        />
      </div>
      <h1 className="font-semibold tracking-wider">{title}</h1>
      <p className="hidden">{text}</p>

      <section className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-2">
          {button.map((btn, index) => (
            <ButtonCard key={index} icon={btn.icon} title={btn.title} />
          ))}
        </div>

        <div className="flex flex-row gap-1">
          <a href={sourceLink} target="_blank" rel="noopener noreferrer">
            <Github
              size={20}
              className="hover:text-zinc-600 trnasform transition-all duration-300"
            />
          </a>
          <a href={appLink} target="_black" rel="noopener noreferrer">
            <SquareArrowOutUpRight
              size={20}
              className="hover:text-zinc-600 trnasform transition-all duration-300"
            />
          </a>
        </div>
      </section>
    </div>
  );
}

export default ProjectsCards;

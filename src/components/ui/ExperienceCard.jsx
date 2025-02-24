import React from "react";

export default function ExperienceCard({ title, subtitle, text }) {
  return (
    <div className="">
      <section className=" flex flex-col items-start justify-start border border-zinc-700 bg-lightBlack p-4 rounded-md space-y-2">
        <h1 className="text-xl xl:text-2xl font-semibold tracking-wider">
          {title}
        </h1>
        <h2 className="text-md italic">{subtitle}</h2>

        <p>{text}</p>
      </section>
    </div>
  );
}

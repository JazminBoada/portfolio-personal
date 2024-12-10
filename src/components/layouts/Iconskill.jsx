import React from "react";

function IconSkill({ icon, alt }) {
  return (
    <div>
      <button className="bg-lightBlack p-4 border border-zinc-700 rounded-xl hover:bg-zinc-700 transform transition-all duration-300">
        <img src={icon} alt={alt} className="w-10 h-10" />
      </button>
    </div>
  );
}

export default IconSkill;

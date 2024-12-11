import React, { useState, useEffect } from "react";

function MouseLight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        left: position.x - 150,
        top: position.y - 150,
      }}
    >
      <div
        className="absolute w-[300px] h-[300px] rounded-full opacity-30 blur-[50px]"
        style={{
          background: `radial-gradient(circle, #572ae3 0%, rgba(76,100,252,0) 70%)`,
        }}
      />
    </div>
  );
}

export default MouseLight;

import { useAnimationFrame } from "motion/react";
import React, { useRef } from "react";

const AuthImagePattern = () => {
  const ref = useRef(null);

  // Animation frame for continuous update
  useAnimationFrame((t) => {
    if (!ref.current) return;

    // Rotate the cube based on time, adding more movement
    const rotateX = Math.sin(t / 1000) * 45;  // Rotate on X axis
    const rotateY = Math.cos(t / 1000) * 45;  // Rotate on Y axis
    const scale = Math.sin(t / 1500) * 0.2 + 1;  // Scaling effect for smooth "pulsing"

    ref.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
  });

  return (
    <div className="flex justify-center items-center p-12">
      <div className="relative w-90 h-90 perspective-1000">
        <div
          ref={ref}
          className="absolute w-full h-full transform-style-preserve-3d transition-transform duration-100 ease-out"
        >
          <div className="absolute w-full h-full bg-red-600 opacity-90 transform rotate-y-0 translate-z-[400px]" />
          <div className="absolute w-full h-full bg-green-600 opacity-90 transform rotate-y-90 translate-z-[400px]" />
          <div className="absolute w-full h-full bg-blue-600 opacity-90 transform rotate-y-180 translate-z-[400px]" />
          <div className="absolute w-full h-full bg-yellow-600 opacity-90 transform rotate-y-[-90deg] translate-z-[400px]" />
          <div className="absolute w-full h-full bg-cyan-600 opacity-90 transform rotate-x-90 translate-z-[400px]" />
          <div className="absolute w-full h-full bg-purple-600 opacity-90 transform rotate-x-[-90deg] translate-z-[400px]" />
        </div>
      </div>
    </div>
  );
};

export default AuthImagePattern;

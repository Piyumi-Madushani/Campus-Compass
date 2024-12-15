import React, { useEffect } from "react";
import { gsap } from "gsap";

const AnimatedCharacter = () => {
  useEffect(() => {
    // Bounce the face
    gsap.to("#face", {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });

    // Wave the hand
    gsap.to("#hand", {
      rotation: 15,
      transformOrigin: "center",
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: "power1.inOut",
    });

    // Blink the eyes
    gsap.to("#eye-left, #eye-right", {
      scaleY: 0.1,
      repeat: -1,
      yoyo: true,
      duration: 0.2,
      delay: 1.5,
      transformOrigin: "center",
    });
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <svg id="character" width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        {/* Face */}
        <circle id="face" cx="100" cy="100" r="60" fill="#FDD835" />
        {/* Eyes */}
        <circle id="eye-left" cx="80" cy="85" r="8" fill="#000" />
        <circle id="eye-right" cx="120" cy="85" r="8" fill="#000" />
        {/* Smile */}
        <path id="smile" d="M 80 120 Q 100 140 120 120" stroke="#000" strokeWidth="4" fill="none" />
        {/* Hand */}
        <g id="hand" transform="translate(140, 80)">
          <rect x="-10" y="0" width="20" height="50" rx="10" fill="#FDD835" />
          <circle cx="0" cy="-10" r="10" fill="#FDD835" />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedCharacter;

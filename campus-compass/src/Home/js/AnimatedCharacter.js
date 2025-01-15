import React from "react";
import { motion } from "framer-motion";

const AnimatedCharacter = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "#f9f9f9" }}>
      <motion.svg
        width="300px"
        height="300px"
        //viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
          y: ["0px", "-20px", "0px"], // Floating up and down
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Background Blob */}
        <motion.ellipse
          cx="200"
          cy="200"
          rx="100"
          ry="120"
          fill="#a7d8ff"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Character Body */}
        <motion.circle cx="200" cy="150" r="30" fill="#fff" stroke="#000" strokeWidth="2" />
        <motion.rect x="170" y="180" width="60" height="100" fill="#ffcc00" stroke="#000" strokeWidth="2" />
        {/* Arms */}
        <motion.line x1="160" y1="190" x2="140" y2="220" stroke="#000" strokeWidth="2" />
        <motion.line x1="240" y1="190" x2="260" y2="220" stroke="#000" strokeWidth="2" />
        {/* Legs */}
        <motion.line x1="180" y1="280" x2="180" y2="320" stroke="#000" strokeWidth="2" />
        <motion.line x1="220" y1="280" x2="220" y2="320" stroke="#000" strokeWidth="2" />
      </motion.svg>
    </div>
  );
};

export default AnimatedCharacter;
